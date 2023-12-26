import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address, Config, LatestBlock } from '../../database/entities';
import { CommonModule } from '../common/common.module';
import { ScheduleModule } from '@nestjs/schedule';
import { WorkerManagerService } from './worker-manager.service';

@Module({
  imports: [TypeOrmModule.forFeature([ Address, LatestBlock, Config]), 
    CommonModule,
    ScheduleModule.forRoot()],
  controllers: [],
  exports: [TypeOrmModule, WorkerManagerService],
  providers: [WorkerManagerService],
})
export class WorkerModule {}
