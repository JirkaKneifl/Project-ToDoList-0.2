import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { List } from '../entities/list.entity';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id_todo: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  title: string;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  dedline_at: Date;

  @Column({
    type: 'datetime',
  })
  created_at: Date = new Date();

  @Column({
    type: 'boolean',
    default: false,
  })
  is_done;

  @ManyToOne(() => List, (list) => list.todos)
  @JoinColumn({ name: 'id_list' })
  list: List;
}
