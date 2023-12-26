import { Entity, Column, BeforeInsert, BeforeUpdate, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

enum GameResult {
    WIN = 'win',
    LOSE = 'lose',
    CANCEL = 'cancel',
}

@Entity('game')
export class Game {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'user_id', type: 'int', nullable: false })
  userId: number;

  @Column({ name: 'epoch_number', type: 'int', nullable: false })
  epochNumber: number;

  @Column({ name: 'result', type: 'varchar', length: 100, nullable: true })
  result: GameResult;

  @Column({ name: 'bet_amount', type: 'int', nullable: true })
  betAmount: number;

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
