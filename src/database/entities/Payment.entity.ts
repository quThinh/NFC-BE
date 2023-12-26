import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OnchainStatus } from 'src/shared/enums';

@Entity('payment')
export class Payment {

  @PrimaryColumn({ name: 'session_id', type: 'int' })
  sessionId: number;

  @Column({ name: 'transfer_token', type: 'varchar', nullable: true })
  transferToken: string;

  @Column({ name: 'payment_token', type: 'varchar', nullable: true })
  paymentToken: string;

  @Column({ name: 'vault_address', type: 'varchar', nullable: true })
  vaultAddress: string;

  @Column({ name: 'pos_address', type: 'varchar', nullable: true })
  POSAddress: string;

  @Column({ name: 'amount', type: 'varchar', nullable: true })
  amount: string;

  @Column({ name: 'deadline', type: 'int', nullable: true })
  deadLine: number;

  @Column({ name: 'payer', type: 'varchar', nullable: true })
  payer: string;

  @Column({ name: 'sent', type: 'bool', nullable: true })
  sent: boolean;

  @Column({ name: 'verified', type: 'bool', nullable: true })
  verified: boolean;

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