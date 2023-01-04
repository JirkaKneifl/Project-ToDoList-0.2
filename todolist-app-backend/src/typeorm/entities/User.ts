import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {List} from "./List";
import {JoinColumn} from "typeorm/browser";



@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id_user: number;
    @Column({
        type: "char",
        length: 20
    })
    first_name: string;
    @Column({
        type: "char",
        length: 20
    })
    last_name: string;
    @Column({
        type: "varchar",
        length: 50
    })
    email: string;
    @Column({
        type: "int",
        width: 9,
        nullable: true,
        unsigned: true,
        zerofill: true
    })
    phone: number;
    @Column({
        type: "varchar",
        length: 256
    })
    password: string;
    @OneToMany(() => List, (list) => list.user)
    lists: List[]
}