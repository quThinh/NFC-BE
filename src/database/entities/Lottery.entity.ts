import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OracleState } from 'src/shared/enums';

@Entity('lottery_on_chain')
export class LotteryOnChain {
  @PrimaryColumn({ name: 'lottery_id', type: 'int', nullable: false, unique: true })
  lotteryId: number;

  @Column({ name: 'status', type: 'varchar', length: 20, nullable: true })
  status: string;

  @Column({ name: 'onchain_status', type: 'varchar', length: 20, nullable: true })
  onchainStatus: string;

  @Column({ name: 'start_time', type: 'bigint', nullable: true })
  startTime: number;

  @Column({ name: 'end_time', type: 'bigint', nullable: true })
  endTime: number;

  @Column({ name: 'price_ticket', type: 'bigint', nullable: true })
  priceTicket: number;

  @Column({ name: 'discount_divisor', type: 'bigint', nullable: true })
  discountDivisor: number;

  @Column({ name: 'rewards_breakdown', type: 'varchar', length: 250, nullable: true })
  rewardsBreakdown: string;

  @Column({ name: 'treasury_fee', type: 'bigint', nullable: true })
  treasuryFee: number;

  @Column({ name: 'token_per_bracket', type: 'varchar', length: 250, nullable: true })
  tokenPerBracket: string;

  @Column({ name: 'count_winners_per_bracket', type: 'varchar', length: 250, nullable: true })
  countWinnersPerBracket: string;

  @Column({ name: 'first_ticket_id', type: 'bigint', nullable: true })
  firstTicketId: number;

  @Column({ name: 'first_ticket_id_next_lottery', type: 'bigint', nullable: true })
  firstTicketIdNextLottery: number;

  @Column({ name: 'amount_collected', type: 'bigint', default: 0 })
  amountCollected: number;

  @Column({ name: 'final_number', type: 'int', nullable: true })
  finalNumber: number;

  @Column({ name: 'injected_amount', type: 'int', nullable: true })
  injectedAmount: number;

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