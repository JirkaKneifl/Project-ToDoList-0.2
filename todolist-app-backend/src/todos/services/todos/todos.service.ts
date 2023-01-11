import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Todo} from "../../../typeorm/entities/Todo";
import {Repository} from "typeorm";
import {UpdateTodoParams} from "../../types/UpdateTodoParams.type";
import {CreateTodoParams} from "../../types/CreateTodoParams.type";
import {List} from "../../../typeorm/entities/List";

@Injectable()
export class TodosService {

    constructor(
        @InjectRepository(Todo) private todoRepository: Repository<Todo>,
        @InjectRepository(List) private listRepository: Repository<List>
    ) {}



    async createTodo(id_list ,createTodoDto){
        const newTodo = new Todo();
        const list = await this.listRepository.findOne({
                where: { id_list }
            });

        newTodo.title = createTodoDto.title;
        newTodo.created_at = new Date();
        newTodo.list = list;

        await this.todoRepository.save(newTodo);
    }

    async findTodoById( id_todo: number){
        await this.todoRepository.findOne({
            where: {id_todo}
        })
    }

    async UpdateTodo(id_list: number,id_todo: number, updateTodoDto){
        await this.todoRepository.update({id_todo}, {...updateTodoDto});
    }

    async DeleteTodo(id_todo: number){
        await this.todoRepository.delete({id_todo});
    }
}
