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
import { Payment } from 'src/database/entities/Payment.entity';

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
    Payment,
  ],
  synchronize: true,
};
