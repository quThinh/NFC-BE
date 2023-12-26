import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CurrencyRegistryService } from './currency.service';
import { BlockchainService } from './blockchain.service';
import { CurrencyConfig, LotteryConfig, PowerPoolConfig } from '../../database/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([CurrencyConfig, PowerPoolConfig, LotteryConfig]),
    HttpModule,
  ],
  exports: [TypeOrmModule, CurrencyRegistryService, BlockchainService,],
  providers: [CurrencyRegistryService, BlockchainService, ],
})
export class CommonModule { }
