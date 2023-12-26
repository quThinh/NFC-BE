import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OracleState } from 'src/shared/enums';

@Entity('ticket')
export class Ticket {
  @PrimaryColumn({ name: 'ticket_id', type: 'int', nullable: false,  unique: true  })
  ticketId: number;

  @Column({ name: 'number', type: 'int', nullable: true })
  number: number;

  @Column({ name: 'status', type: 'boolean', nullable: true })
  status: boolean;

  @Column({ name: 'lottery_purchase_id', type: 'int', nullable: true })
  lotteryPurchaseId: number;

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