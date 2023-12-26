import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OracleState } from 'src/shared/enums';

@Entity('power_pool_config')
export class PowerPoolConfig {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'admin_address', type: 'varchar', nullable: true})
  adminAddress: string;

  @Column({ name: 'paused', type: 'boolean', nullable: true})
  paused: boolean;

  @Column({ name: 'operator_address', type: 'varchar', nullable: true})
  operatorAddress: string;

  @Column({ name: 'random_number_generator', type: 'varchar', nullable: true})
  randomNumberGenerator: string;

  @Column({ name: 'pool_size', type: 'bigint', nullable: true})
  poolSize: number;

  @Column({ name: 'treasury_fee', type: 'bigint', nullable: true})
  treasuryFee: number;

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