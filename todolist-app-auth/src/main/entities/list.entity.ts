import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/user.entity';
import { Todo } from './todo.entity';

@Entity({ name: 'lists' })
export class List {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id_list: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  description: string;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  archivated_at: Date;

  @ManyToOne(() => User, (user) => user.lists)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @OneToMany(() => Todo, (todo) => todo.list)
  todos: Todo[];
}
