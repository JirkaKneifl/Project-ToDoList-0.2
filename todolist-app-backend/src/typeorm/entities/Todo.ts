import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {List} from "./List";


@Entity({name: 'todos'})
export class Todo {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id_todo: number;

    @Column({
        type: "varchar",
        length: 100
    })
    title: string;

    @Column({
        type: "datetime"
    })
    dedline_at: Date;

    @Column({
        type: "datetime"
    })
    created_at: Date;

    @OneToMany(type => List, list => list.id_list)
    id_list: List[];

    @Column({
        type: "tinyint",
        width: 1
    })
    is_done;
}