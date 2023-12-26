import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OracleState } from 'src/shared/enums';

@Entity('lottery_config')
export class LotteryConfig {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'admin_address', type: 'varchar', nullable: true})
  adminAddress: string;

  @Column({ name: 'operator_address', type: 'varchar', nullable: true})
  operatorAddress: string;

  @Column({ name: 'treasury_address', type: 'varchar', nullable: true})
  treasuryAddress: string;

  @Column({ name: 'max_tickets_per_buy_or_claim', type: 'int', nullable: true, default: 100})
  maxNumberTicketsPerBuyOrClaim: number;

  @Column({ name: 'injector_address', type: 'varchar', nullable: true})
  injectorAddress: string;

  @Column({ name: 'random_number_generator', type: 'varchar', nullable: true})
  randomNumberGenerator: string;

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