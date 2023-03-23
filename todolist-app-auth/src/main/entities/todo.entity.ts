import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { List } from '../../main/entities/list.entity';

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
    type: 'tinyint',
    width: 1,
  })
  is_done;

  @ManyToOne(() => List, (list) => list.todos)
  @JoinColumn({ name: 'id_list' })
  list: List;
}
