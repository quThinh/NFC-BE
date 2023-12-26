import { ConnectionOptions } from 'typeorm';
import {
  Address,
  User,
  Admin,
  CurrencyConfig,
  Transaction,
  MailJob,
  MailLog,
  LatestBlock,
  Config
} from '../database/entities';
import { RoundLog } from 'src/database/entities/RoundLog.entity';
import { RoundOnchain } from 'src/database/entities/RoundOnchain.entity';
import { PlayLog } from 'src/database/entities/PlayLog.entity';
import { Payment } from 'src/database/entities/Payment.entity';
import { PowerPoolConfig } from 'src/database/entities/PowerPoolConfig.entity';
import { LotteryConfig } from 'src/database/entities/LotteryConfig.entity';
import { WrongToken } from 'src/database/entities/WrongToken.entity';
import { LotteryOnChain } from 'src/database/entities/Lottery.entity';
import { LotteryClaim } from 'src/database/entities/LotteryClaim.entity';
import { Ticket } from 'src/database/entities/Ticket.entity';
import { LotteryPurchases } from 'src/database/entities/LotteryPurchase.entity';

export const databaseConfig: ConnectionOptions = {
  type: (process.env.TYPEORM_CONNECTION || 'mysql') as any,
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [
    Address,
    CurrencyConfig,
    Transaction,
    MailJob,
    MailLog,
    User,
    Admin,
    LatestBlock,
    Config,
    RoundLog,
    RoundOnchain,
    PlayLog,
    Payment,
    PowerPoolConfig,
    LotteryConfig,
    WrongToken,
    LotteryOnChain,
    LotteryClaim,
    LotteryPurchases,
    Ticket
  ],
  synchronize: true,
};
