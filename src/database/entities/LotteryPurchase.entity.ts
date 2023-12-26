import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OracleState } from 'src/shared/enums';

@Entity('lottery_purchases')
export class LotteryPurchases {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'lottery_id', type: 'int', nullable: true })
  lotteryId: number;

  @Column({ name: 'status', type: 'varchar', length: 20, nullable: true })
  status: string;

  @Column({ name: 'buyer', type: 'varchar', length: 250, nullable: true })
  buyer: string;

  @Column({ name: 'ticket_ids_array', type: 'varchar', length: 1000, nullable: true })
  ticketIdsArray: string;

  @Column({ name: 'ticket_numbers_array', type: 'varchar', length: 1000, nullable: true })
  ticketNumbersArray: string;

  @Column({ name: 'number_ticket', type: 'int', nullable: true })
  numberTickets: number;

  // @Column({ name: 'amount_to_transfer', type: 'varchar',length: 250, nullable: true })
  // amountToTransfer: string;

  @Column({ name: 'reward', type: 'int', nullable: true, default: 0 })
  reward: number;

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