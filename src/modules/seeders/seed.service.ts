import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CurrencyConfig,
} from "../../database/entities";
import { Repository } from "typeorm";
import { ICurrencyConfigInterface } from "../../database/interfaces/ICurrencyConfig.interface";

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(CurrencyConfig)
    private currencyConfigRepository: Repository<CurrencyConfig>,

  ) {}


  async createCurrencyConfigs(
    currencyConfig: ICurrencyConfigInterface[]
  ): Promise<any> {
    return await this.currencyConfigRepository.save(currencyConfig);
  }

}