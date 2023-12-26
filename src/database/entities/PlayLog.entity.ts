import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { OnchainStatus } from 'src/shared/enums';

@Entity('play_log')
export class PlayLog {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'epoch_number', type: 'bigint', nullable: false })
  epochNumber: number;

  @Column({ name: 'player_address', type: 'varchar', nullable: false })
  playerAddress: string;

  @Column({ name: 'ticket_id', type: 'bigint', nullable: false })
  ticketId: number;

  @Column({ name: 'token_id', type: 'bigint', nullable: false })
  tokenId: number;

  @Column({ name: 'status', type: 'enum', enum: OnchainStatus, default: OnchainStatus.CONFIRMING })
  status: string;
  
  @Column({ name: 'refunded', type: 'varchar', length: 50, nullable: true })
  refunded: string;

  @Column({ name: 'block_hash', type: 'varchar', length: 100, nullable: true })
  blockHash: string;

  @Column({ name: 'claimed', type: 'boolean', nullable: true, default: false })
  claimed: boolean;

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