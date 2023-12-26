import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Config, CurrencyConfig, LatestBlock } from '../../database/entities';
import { getLogger } from '../../shared/logger';
import { DataSource, MoreThan, Repository } from 'typeorm';
import { PaymentWorkerService } from './Payment';

const logger = getLogger('AddressesService');


@Injectable()
export class WorkerManagerService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,

    @InjectRepository(LatestBlock)
    private latestBlockRepository: Repository<LatestBlock>,

    @InjectRepository(CurrencyConfig)
    private currenciesRepository: Repository<CurrencyConfig>,

    @InjectRepository(Config)
    private configRepository: Repository<Config>

  ) { this.init() }


  async init() {
    const currencyConfigs = await this.dataSource
      .manager.find(CurrencyConfig, {
        where: {
          swapId: MoreThan(0)
        }
      });
    for (let currency of currencyConfigs) {
      logger.info(`currencyConfigs: ${JSON.stringify(currency)}`);
      new PaymentWorkerService(currency,
        this.dataSource);
    }
  }

}
