"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PaymentWorkerService = void 0;
var web3_1 = require("web3");
var fs = require("fs");
var logger_1 = require("../../shared/logger");
var Utils_1 = require("../../shared/Utils");
var axios_1 = require("axios");
var p_limit_1 = require("p-limit");
var entities_1 = require("../../../../../../../../../src/database/entities");
var enums_1 = require("../../../../../../../../../src/shared/enums");
var Payment_entity_1 = require("../../../../../../../../../src/database/entities/Payment.entity");
var logger = (0, logger_1.getLogger)('PaymentWorkerService');
var NodeCache = require("node-cache");
var BATCH_LIMIT = 20;
var nodeCache = new NodeCache({ stdTTL: BATCH_LIMIT, checkperiod: BATCH_LIMIT });
var limit = (0, p_limit_1["default"])(BATCH_LIMIT);
var PaymentWorkerService = /** @class */ (function () {
    function PaymentWorkerService(currency, dataSource) {
        this.currency = currency;
        this.dataSource = dataSource;
        this._web3 = new web3_1["default"](this.currency.rpcEndpoint);
        this._POSAbi = fs.readFileSync('./contracts/POS.sol/POS.json', 'utf8');
        this._POSContract = new this._web3.eth.Contract(JSON.parse(this._POSAbi).abi, "0xA509A02aB4acf8eC59a7D7aF8189FCBbE1378Da8");
        this._VaultAbi = fs.readFileSync('./contracts/VaultContract.sol/VaultContract.json', 'utf8');
        this._VaultContract = new this._web3.eth.Contract(JSON.parse(this._VaultAbi).abi, "0x61D9Be80e598699F2cf6dcd2EBA2Ac6E8Df63579");
        this._setup();
    }
    PaymentWorkerService.prototype._setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.doCrawlJob();
                return [2 /*return*/];
            });
        });
    };
    PaymentWorkerService.prototype.doCrawlJob = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isWaiting, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.crawlDataPOS()];
                    case 1:
                        isWaiting = _a.sent();
                        if (!isWaiting) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.delay(this.currency.averageBlockTime)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.delay(5000)];
                    case 4:
                        _a.sent(); // 0.5 seconds, to avoid too many requests
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        if (e_1.message.indexOf('ER_LOCK_WAIT_TIMEOUT') > -1 || e_1.message.indexOf('ER_LOCK_DEADLOCK') > -1) {
                            logger.info("PaymentWorkerService::doCrawlJob Other server is doing the job, wait for a while");
                        }
                        else {
                            logger.error("PaymentWorkerService::doCrawlJob ".concat(e_1.message));
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        if (true) return [3 /*break*/, 0];
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    PaymentWorkerService.prototype.crawlDataPOS = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataSource.transaction(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var contractAddress, latestBlockInDb, latestTempBlockInDb, latestBlock, getFirstBlockUrl, firstBlock, fromBlock, toBlock, tempFromBlock, tempToBlock;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        contractAddress = "0xA509A02aB4acf8eC59a7D7aF8189FCBbE1378Da8";
                                        return [4 /*yield*/, manager
                                                .getRepository(entities_1.LatestBlock)
                                                .createQueryBuilder('latest_block')
                                                .useTransaction(true)
                                                .setLock("pessimistic_write")
                                                .where({ currency: "POS_" + this.currency.network + "_" + contractAddress })
                                                .getOne()];
                                    case 1:
                                        latestBlockInDb = _a.sent();
                                        return [4 /*yield*/, manager.getRepository(entities_1.LatestBlock)
                                                .findOne({
                                                where: {
                                                    currency: "POS_" + this.currency.network + "_" + contractAddress + "_temp"
                                                }
                                            })];
                                    case 2:
                                        latestTempBlockInDb = _a.sent();
                                        return [4 /*yield*/, (0, Utils_1.getBlockNumber)(this.currency.chainId, this._web3)];
                                    case 3:
                                        latestBlock = _a.sent();
                                        if (!!latestBlockInDb) return [3 /*break*/, 7];
                                        latestBlockInDb = new entities_1.LatestBlock();
                                        latestBlockInDb.currency = "POS_" + this.currency.network + "_" + contractAddress;
                                        getFirstBlockUrl = this.currency.scanApi
                                            + "/api?module=account&action=txlist&address=".concat(contractAddress, "&startblock=0&endblock=99999999&page=1&offset=1&sort=asc");
                                        return [4 /*yield*/, axios_1["default"].get(getFirstBlockUrl)];
                                    case 4:
                                        firstBlock = _a.sent();
                                        if (!firstBlock.data.result) {
                                            return [2 /*return*/];
                                        }
                                        latestBlockInDb.blockNumber = firstBlock.data.result[0].blockNumber;
                                        if (!latestBlockInDb.blockNumber) return [3 /*break*/, 6];
                                        return [4 /*yield*/, manager.getRepository(entities_1.LatestBlock).save(latestBlockInDb)];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: return [2 /*return*/, false];
                                    case 7:
                                        if (!latestTempBlockInDb) {
                                            latestTempBlockInDb = new entities_1.LatestBlock();
                                            latestTempBlockInDb.currency = "POS_" + this.currency.network + "_" + contractAddress + "_temp";
                                            latestTempBlockInDb.blockNumber = latestBlockInDb.blockNumber;
                                        }
                                        fromBlock = latestBlockInDb.blockNumber + 1;
                                        toBlock = latestBlock - this.currency.requiredConfirmations;
                                        // max 999 blocks per request
                                        if (toBlock > fromBlock + 999) {
                                            toBlock = fromBlock + 999;
                                        }
                                        tempFromBlock = Math.max(toBlock + 1, latestTempBlockInDb.blockNumber + 1);
                                        tempToBlock = latestBlock - this.currency.tempRequiredConfirmations;
                                        if (tempToBlock > tempFromBlock + 999) {
                                            tempToBlock = tempFromBlock + 999;
                                        }
                                        if (!(fromBlock <= toBlock)) return [3 /*break*/, 10];
                                        return [4 /*yield*/, this.crawlBlock(manager, fromBlock, toBlock, latestBlock, false)];
                                    case 8:
                                        _a.sent();
                                        return [4 /*yield*/, this.crawlBlock(manager, tempFromBlock, tempToBlock, latestBlock, true)];
                                    case 9:
                                        _a.sent();
                                        _a.label = 10;
                                    case 10: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentWorkerService.prototype.crawlBlock = function (manager, fromBlock, toBlock, latestBlock, isTemp) {
        if (isTemp === void 0) { isTemp = false; }
        return __awaiter(this, void 0, void 0, function () {
            var blockObj, _a, paymentEvents, paymentRequestEvents, status_1, results, latestBlockKey, _latestBlock;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!isTemp || (latestBlock - toBlock <= this.currency.requiredConfirmations))) return [3 /*break*/, 3];
                        blockObj = {
                            fromBlock: fromBlock,
                            toBlock: toBlock
                        };
                        return [4 /*yield*/, Promise.all([
                                this._POSContract.getPastEvents("Payment", blockObj),
                                this._VaultContract.getPastEvents("PaymentRequest", blockObj),
                            ])];
                    case 1:
                        _a = _b.sent(), paymentEvents = _a[0], paymentRequestEvents = _a[1];
                        status_1 = isTemp ? enums_1.OnchainStatus.CONFIRMING : enums_1.OnchainStatus.CONFIRMED;
                        return [4 /*yield*/, Promise.allSettled([
                                this.handlePaymentEvents(manager, paymentRequestEvents, status_1, isTemp),
                                this.handlePaymentVaultEvents(manager, paymentEvents, status_1, isTemp),
                            ])];
                    case 2:
                        results = _b.sent();
                        results.forEach(function (result) {
                            if (result.status === 'rejected') {
                                throw new Error(result.reason);
                            }
                        });
                        _b.label = 3;
                    case 3:
                        latestBlockKey = isTemp ? "POS_" + this.currency.network + "_" + "0xA509A02aB4acf8eC59a7D7aF8189FCBbE1378Da8" + "_temp" : "POS_" + this.currency.network + "_" + "0xA509A02aB4acf8eC59a7D7aF8189FCBbE1378Da8";
                        return [4 /*yield*/, manager.findOne(entities_1.LatestBlock, {
                                where: {
                                    currency: latestBlockKey
                                }
                            })];
                    case 4:
                        _latestBlock = _b.sent();
                        if (!_latestBlock) {
                            _latestBlock = new entities_1.LatestBlock();
                            _latestBlock.currency = latestBlockKey;
                        }
                        _latestBlock.blockNumber = toBlock;
                        logger.info("POStWorkerService::crawlBlock from ".concat(fromBlock, " to ").concat(toBlock, " with temp ").concat(isTemp));
                        return [4 /*yield*/, manager.save(_latestBlock)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentWorkerService.prototype.handlePaymentEvents = function (manager, events, status, isTemp) {
        if (isTemp === void 0) { isTemp = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.allSettled(events.map(function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            return [2 /*return*/, limit(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var blockData, _a, _sessionId, _token, _vault, paymentExist, payment, err_1;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _b.trys.push([0, 7, , 8]);
                                                if (!!isTemp) return [3 /*break*/, 6];
                                                return [4 /*yield*/, this.web3Cache("getBlock_" + event.blockNumber, this._web3.eth.getBlock(event.blockNumber))];
                                            case 1:
                                                blockData = _b.sent();
                                                console.log(123, event);
                                                _a = event.returnValues, _sessionId = _a._sessionId, _token = _a._token, _vault = _a._vault;
                                                return [4 /*yield*/, manager.findOne(Payment_entity_1.Payment, {
                                                        where: {
                                                            sessionId: _sessionId
                                                        }
                                                    })];
                                            case 2:
                                                paymentExist = _b.sent();
                                                if (!paymentExist) return [3 /*break*/, 4];
                                                paymentExist.sessionId = _sessionId;
                                                paymentExist.paymentToken = _token;
                                                paymentExist.vaultAddress = _vault;
                                                return [4 /*yield*/, manager.save(paymentExist)];
                                            case 3:
                                                _b.sent();
                                                return [3 /*break*/, 6];
                                            case 4:
                                                payment = new Payment_entity_1.Payment();
                                                payment.sessionId = _sessionId;
                                                payment.paymentToken = _token;
                                                payment.vaultAddress = _vault;
                                                return [4 /*yield*/, manager.save(payment)];
                                            case 5:
                                                _b.sent();
                                                _b.label = 6;
                                            case 6: return [3 /*break*/, 8];
                                            case 7:
                                                err_1 = _b.sent();
                                                logger.error("PaymentWorkerService::handlePaymentEvents error: ".concat(err_1));
                                                return [3 /*break*/, 8];
                                            case 8: return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        });
                    }); }))];
            });
        });
    };
    PaymentWorkerService.prototype.handlePaymentVaultEvents = function (manager, events, status, isTemp) {
        if (isTemp === void 0) { isTemp = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.allSettled(events.map(function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            return [2 /*return*/, limit(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var blockData, _a, _sessionId, _pos, _token, _amount, _deadline, _payer, paymentExist, payment, err_2;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _b.trys.push([0, 7, , 8]);
                                                if (!!isTemp) return [3 /*break*/, 6];
                                                return [4 /*yield*/, this.web3Cache("getBlock_" + event.blockNumber, this._web3.eth.getBlock(event.blockNumber))];
                                            case 1:
                                                blockData = _b.sent();
                                                _a = event.returnValues, _sessionId = _a._sessionId, _pos = _a._pos, _token = _a._token, _amount = _a._amount, _deadline = _a._deadline, _payer = _a._payer;
                                                return [4 /*yield*/, manager.findOne(Payment_entity_1.Payment, { where: { sessionId: _sessionId } })];
                                            case 2:
                                                paymentExist = _b.sent();
                                                if (!paymentExist) return [3 /*break*/, 4];
                                                paymentExist.sessionId = Number(_sessionId);
                                                paymentExist.POSAddress = _pos;
                                                paymentExist.transferToken = _token;
                                                paymentExist.amount = String(_amount);
                                                paymentExist.deadLine = Number(_deadline);
                                                paymentExist.payer = _payer;
                                                return [4 /*yield*/, manager.save(paymentExist)];
                                            case 3:
                                                _b.sent();
                                                return [2 /*return*/];
                                            case 4:
                                                payment = new Payment_entity_1.Payment();
                                                payment.sessionId = Number(_sessionId);
                                                payment.POSAddress = _pos;
                                                payment.transferToken = _token;
                                                payment.amount = String(_amount);
                                                payment.deadLine = Number(_deadline);
                                                payment.payer = _payer;
                                                return [4 /*yield*/, manager.save(payment)];
                                            case 5:
                                                _b.sent();
                                                _b.label = 6;
                                            case 6: return [3 /*break*/, 8];
                                            case 7:
                                                err_2 = _b.sent();
                                                logger.error("PaymentWorkerService::handlePlayEvents error: ".concat(err_2));
                                                return [3 /*break*/, 8];
                                            case 8: return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        });
                    }); }))];
            });
        });
    };
    PaymentWorkerService.prototype.delay = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, t); })];
            });
        });
    };
    PaymentWorkerService.prototype.web3Cache = function (key, func) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = nodeCache.get(key);
                        if (!(value == undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, func];
                    case 1:
                        // handle miss!
                        value = _a.sent();
                        nodeCache.set(key, value);
                        return [2 /*return*/, value];
                    case 2: return [2 /*return*/, value];
                }
            });
        });
    };
    return PaymentWorkerService;
}());
exports.PaymentWorkerService = PaymentWorkerService;
