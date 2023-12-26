import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OracleState } from 'src/shared/enums';

@Entity('lottery_claim')
export class LotteryClaim {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
  id: number;

  @Column({ name: 'amount', type: 'bigint', nullable: true })
  amount: number;

  @Column({ name: 'string', type: 'varchar', length: 250, nullable: true })
  claimer: string;

  @Column({ name: 'lottery_id', type: 'int', nullable: true })
  lotteryId: number;

  @Column({ name: 'number_tickets', type: 'int', nullable: true })
  numberTickets: number;

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