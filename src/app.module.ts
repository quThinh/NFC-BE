import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { AuthUserModule } from './modules/user/auth.module';
import { CommonModule } from './modules/common/common.module';
import { TransformInterceptor } from './config/rest/transform.interceptor';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionFilter } from './config/exception/exception.filter';
// import { PowerPoolModule } from './modules/powerpool/power-pool.module';
// import { LotteryModule } from './modules/lottery/lottery.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(databaseConfig),
    AuthUserModule,
    CommonModule,
    // PowerPoolModule,
    // LotteryModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
  ],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
