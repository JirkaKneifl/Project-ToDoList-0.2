import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { List } from '../main/entities/list.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id_user: number;

  @Column({
    type: 'char',
    length: 20,
  })
  first_name: string;

  @Column({
    type: 'char',
    length: 20,
  })
  last_name: string;

  @Column({
    unique: true,
    type: 'varchar',
    length: 50,
  })
  email: string;

  @Column({
    type: 'int',
    width: 9,
    nullable: true,
    unsigned: true,
    zerofill: true,
  })
  phone: number;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  picture: string;

  @OneToMany(() => List, (list) => list.user)
  lists: List[];

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    picture: string,
  ) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.email = email;
    this.picture = picture;
    this.phone = null;
    this.password = null;
  }
}
