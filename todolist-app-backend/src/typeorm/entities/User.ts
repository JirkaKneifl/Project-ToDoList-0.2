import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


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
}