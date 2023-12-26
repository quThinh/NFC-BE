import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OracleState } from 'src/shared/enums';

@Entity('round_on_chain')
export class RoundOnchain {
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

  @Column({ name: 'total_ticket', type: 'int', nullable: true })
  totalTicket: number;

  @Column({ name: 'winning_ticket', type: 'int', nullable: true })
  winningTiket: number;

  @Column({ name: 'reward_amount', type: 'int', nullable: true })
  rewardAmount: number;

  @Column({ name: 'request_id', type: 'varchar', length: 100, nullable: true })
  requestId: string;

  @Column({ name: 'result', type: 'int', nullable: true })
  result: number;

  @Column({ name: 'reward_claimed', type: 'boolean', nullable: true, default: false })
  rewardClaimed: boolean;

  @Column({ name: 'treasury_amount', type: 'bigint', nullable: true })
  treasuryAmount: number;

  @Column({ name: 'treasury_claimed', type: 'boolean', nullable: true, default: false })
  treasuryClaimed: boolean;

  @Column({ name: 'oracle_state', type: 'varchar', length: 50, nullable: true })
  oracleState: string;

  @Column({ name: 'refunded', type: 'boolean', default: false, nullable: true })
  refunded: boolean;

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