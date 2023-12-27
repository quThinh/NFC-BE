import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CurrencyRegistryService } from './currency.service';
import { BlockchainService } from './blockchain.service';
import { CurrencyConfig } from '../../database/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([CurrencyConfig]),
    HttpModule,
  ],
  exports: [TypeOrmModule, CurrencyRegistryService, BlockchainService,],
  providers: [CurrencyRegistryService, BlockchainService, ],
})
export class CommonModule { }
