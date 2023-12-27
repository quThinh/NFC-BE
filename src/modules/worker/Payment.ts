import { DataSource, EntityManager, LessThanOrEqual } from 'typeorm';
import Web3 from "web3";
import * as fs from "fs";
import { getLogger } from "../../shared/logger";
import { getBlockNumber } from "../../shared/Utils";
import axios from "axios";
import pLimit from "p-limit";
import { CurrencyConfig, LatestBlock } from 'src/database/entities';
import { OnchainStatus, OracleState, RefundStatus } from 'src/shared/enums';
import { Payment } from 'src/database/entities/Payment.entity';
import { RoundOnchain } from 'src/database/entities/RoundOnchain.entity';
import { PlayLog } from 'src/database/entities/PlayLog.entity';
import { RoundLog } from 'src/database/entities/RoundLog.entity';

const logger = getLogger('PaymentWorkerService');
const NodeCache = require("node-cache");
const BATCH_LIMIT = 20;
const nodeCache = new NodeCache({ stdTTL: BATCH_LIMIT, checkperiod: BATCH_LIMIT });
const limit = pLimit(BATCH_LIMIT);

export class PaymentWorkerService {
    _web3 = new Web3(this.currency.rpcEndpoint);

    _POSAbi = fs.readFileSync('./contracts/POS.sol/POS.json', 'utf8');
    _POSContract = new this._web3.eth.Contract(JSON.parse(this._POSAbi).abi, "0x0DBb0069A7684E2DB1b9962F22Afdc6eB61F43b0");
    _VaultAbi = fs.readFileSync('./contracts/VaultContract.sol/VaultContract.json', 'utf8');
    _VaultContract = new this._web3.eth.Contract(JSON.parse(this._VaultAbi).abi, "0x0731fE55F95B5b986F4EBd187315fB1F4C823b94");
    constructor(
        private readonly currency: CurrencyConfig,
        private readonly dataSource: DataSource
    ) {
        this._setup();
    }

    async _setup() {
        this.doCrawlJob();
    }

    async doCrawlJob() {
        do {
            try {
                let isWaiting = await this.crawlDataPOS();
                if (isWaiting) {
                    await this.delay(this.currency.averageBlockTime);
                } else {
                    await this.delay(5000); // 0.5 seconds, to avoid too many requests
                }
            } catch (e) {
                if (e.message.indexOf('ER_LOCK_WAIT_TIMEOUT') > -1 || e.message.indexOf('ER_LOCK_DEADLOCK') > -1) {
                    logger.info(`PaymentWorkerService::doCrawlJob Other server is doing the job, wait for a while`);
                } else {
                    logger.error(`PaymentWorkerService::doCrawlJob ${e.message}`);
                }
            }
        } while (true)
    }

    async crawlDataPOS() {
        return await this.dataSource.transaction(async (manager) => {
            const contractAddress = "0x0DBb0069A7684E2DB1b9962F22Afdc6eB61F43b0";

            let latestBlockInDb = await manager
                .getRepository(LatestBlock)
                .createQueryBuilder('latest_block')
                .useTransaction(true)
                .setLock("pessimistic_write")
                .where({ currency: "POS_" + this.currency.network + "_" + contractAddress })
                .getOne();
            let latestTempBlockInDb = await manager.getRepository(LatestBlock)
                .findOne({
                    where: {
                        currency: "POS_" + this.currency.network + "_" + contractAddress + "_temp"
                    }
                });
            let latestBlock = await getBlockNumber(this.currency.chainId, this._web3);

            if (!latestBlockInDb) {
                latestBlockInDb = new LatestBlock();
                latestBlockInDb.currency = "POS_" + this.currency.network + "_" + contractAddress;
                let getFirstBlockUrl = this.currency.scanApi
                    + `/api?module=account&action=txlist&address=${contractAddress}&startblock=0&endblock=99999999&page=1&offset=1&sort=asc`;
                let firstBlock = await axios.get(getFirstBlockUrl);

                if (!firstBlock.data.result) {
                    return;
                }

                latestBlockInDb.blockNumber = firstBlock.data.result[0].blockNumber;

                if (latestBlockInDb.blockNumber) {
                    await manager.getRepository(LatestBlock).save(latestBlockInDb);
                }

                return false;
            }

            if (!latestTempBlockInDb) {
                latestTempBlockInDb = new LatestBlock();
                latestTempBlockInDb.currency = "POS_" + this.currency.network + "_" + contractAddress + "_temp";
                latestTempBlockInDb.blockNumber = latestBlockInDb.blockNumber;
            }

            let fromBlock = latestBlockInDb.blockNumber + 1;
            let toBlock = latestBlock - this.currency.requiredConfirmations;

            // max 999 blocks per request
            if (toBlock > fromBlock + 999) {
                toBlock = fromBlock + 999;
            }

            let tempFromBlock = Math.max(toBlock + 1, latestTempBlockInDb.blockNumber + 1);
            let tempToBlock = latestBlock - this.currency.tempRequiredConfirmations;

            if (tempToBlock > tempFromBlock + 999) {
                tempToBlock = tempFromBlock + 999;
            }

            if (fromBlock <= toBlock) {
                await this.crawlBlock(manager, fromBlock, toBlock, latestBlock, false);
                await this.crawlBlock(manager, tempFromBlock, tempToBlock, latestBlock, true);
            }
        });
    }

    async crawlBlock(manager: EntityManager, fromBlock: number, toBlock: number, latestBlock: number, isTemp: boolean = false) {
        if (!isTemp || (latestBlock - toBlock <= this.currency.requiredConfirmations)) {
            let blockObj = {
                fromBlock: fromBlock,
                toBlock: toBlock,
            };
            let [
                paymentRequestEvents,
                paymentEvents,
            ] = await Promise.all([
                this._POSContract.getPastEvents("PaymentRequest", blockObj),
                this._VaultContract.getPastEvents("Payment", blockObj),
            ]);
            let status = isTemp ? OnchainStatus.CONFIRMING : OnchainStatus.CONFIRMED;
            const results = await Promise.allSettled([
                this.handlePaymentEvents(manager, paymentRequestEvents, paymentEvents, status, isTemp),
            ]);
            results.forEach((result) => {
                if (result.status === 'rejected') {
                    throw new Error(result.reason);
                }
            });
        }

        // update latest block in transaction
        const latestBlockKey = isTemp ? "POS_" + this.currency.network + "_" + "0x0DBb0069A7684E2DB1b9962F22Afdc6eB61F43b0" + "_temp" : "POS_" + this.currency.network + "_" + "0x0DBb0069A7684E2DB1b9962F22Afdc6eB61F43b0";
        let _latestBlock = await manager.findOne(LatestBlock, {
            where: {
                currency: latestBlockKey
            }
        });
        if (!_latestBlock) {
            _latestBlock = new LatestBlock();
            _latestBlock.currency = latestBlockKey;
        }
        _latestBlock.blockNumber = toBlock;
        logger.info(`POStWorkerService::crawlBlock from ${fromBlock} to ${toBlock} with temp ${isTemp}`)
        await manager.save(_latestBlock);
    }

    async handlePaymentEvents(manager: EntityManager, eventsRequest: any[], eventPay: any[], status: OnchainStatus, isTemp: boolean = false) {
        return Promise.allSettled(
            eventsRequest.map(async (event, index: number) => {
                return limit(async () => {
                    try {
                        if (!isTemp) {
                            const blockData: any = await this.web3Cache("getBlock_" + event.blockNumber, this._web3.eth.getBlock(event.blockNumber));
                            let { _sessionId, _token, _vault } = event.returnValues;
                            let paymentToken = _token;
                            let { _pos, _amount, _deadline, _payer } = eventPay[index].returnValues;
                            _token = eventPay[index].returnValues._token;
                            console.log(123,_sessionId, _token, _amount, _deadline, _payer);
                            const paymentExist = await manager.findOne(Payment, {
                                where: {
                                    sessionId: Number(_sessionId),
                                }
                            });
                            if (paymentExist) {
                                paymentExist.sessionId = Number(_sessionId);
                                paymentExist.paymentToken = paymentToken;
                                paymentExist.vaultAddress = _vault;
                                paymentExist.POSAddress = _pos;
                                paymentExist.transferToken = _token;
                                paymentExist.amount = String(_amount);
                                paymentExist.deadLine = Number(_deadline);
                                paymentExist.payer = _payer;
                                await manager.save(paymentExist);
                            } else {
                                const payment = new Payment();
                                payment.sessionId = Number(_sessionId);
                                payment.paymentToken = paymentToken;
                                payment.vaultAddress = _vault;
                                payment.POSAddress = _pos;
                                payment.transferToken = _token;
                                payment.amount = String(_amount);
                                payment.deadLine = Number(_deadline);
                                payment.payer = _payer;
                                await manager.save(payment);
                            }
                        }
                    } catch (err) {
                        logger.error(`PaymentWorkerService::handlePaymentEvents error: ${err}`);
                    }
                });
            })
        )
    }

    async delay(t) {
        return new Promise(resolve => setTimeout(resolve, t));
    }

    async web3Cache(key, func) {
        let value = nodeCache.get(key);
        if (value == undefined) {
            // handle miss!
            value = await func;
            nodeCache.set(key, value);
            return value;
        }
        return value;
    }

}