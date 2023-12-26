import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('round_log')
export class RoundLog {
  @PrimaryColumn({ name: 'epoch_number', type: 'bigint', nullable: false, unique: true })
  epochNumber: number;

  @Column({ name: 'tokenIds', type: 'varchar', nullable: true, default: null })
  tokenIds: string;

  @Column({ name: 'start_time_stamp', type: 'bigint', nullable: true })
  startTimeStamp: number;

  @Column({ name: 'end_time_stamp', type: 'bigint', nullable: true })
  endTimeStamp: number;

  @Column({ name: 'status', type: 'varchar', length: 20, nullable: false })
  status: string;

  @Column({ name: 'total_ticket', type: 'int', nullable: true, default: 0 })
  totalTicket: number;

  @Column({ name: 'winning_ticket', type: 'int', nullable: true })
  winningTiket: number;

  @Column({ name: 'reward_amount', type: 'int', nullable: true })
  rewardAmount: number;

  @Column({ name: 'reward_claimed', type: 'boolean', nullable: true, default:false })
  rewardClaimed: boolean;

  @Column({ name: 'treasury_amount', type: 'bigint', nullable: true })
  treasuryAmount: number;

  @Column({ name: 'treasury_claimed', type: 'boolean', nullable: true, default: false })
  treasuryClaimed: boolean;

  @Column({ name: 'result', type: 'int', nullable: true })
  result: number;

  @Column({ name: 'oracle_state', type: 'varchar', length: 50, nullable: true })
  oracleState: string;

  @Column({ name: 'request_id', type: 'varchar', length: 100, nullable: true })
  requestId: string;

  // @Column({ name: 'round_executed', type: 'boolean', nullable: false})
  // roundExecuted: boolean;

  @Column({ name: 'block_hash', type: 'varchar', length: 100, nullable: true })
  blockHash: string;

  @Column({ name: 'block_time_stamp', type: 'bigint', nullable: true })
  blockTimeStamp: number;

  @Column({ name: 'block_number', type: 'bigint', nullable: true })
  blockNumber: number;

  @Column({ name: 'chain_id', type: 'varchar', nullable: true })
  public chainId: string;

  @Column({ name: 'created_at', type: 'bigint', nullable: true })
  createdAt: number;

  @Column({ name: 'updated_at', type: 'bigint', nullable: true })
  updatedAt: number;

  @BeforeInsert()
  public updateCreateDates() {
    this.createdAt = nowInMillis();
    this.updatedAt = nowInMillis();
  }

  @BeforeUpdate()
  public updateUpdateDates() {
    this.updatedAt = nowInMillis();
  }
}