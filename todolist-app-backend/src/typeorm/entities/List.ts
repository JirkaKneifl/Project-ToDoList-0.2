import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";


@Entity({name: 'lists'})
export class List {
    @PrimaryGeneratedColumn({
        type: "int",
    })
    id_list: number;

    @Column({
        type: "varchar",
        length: 100
    })
    title: string;

    @Column({
        type: "varchar",
        length: 256,
        nullable: true
    })
    description: string;

    @OneToMany(type => User, user => user.id_user)
    id_user: User[];

    @Column({
        type: "date",
        nullable: true
    })
    archivated_at: Date;
}