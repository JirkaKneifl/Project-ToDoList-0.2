import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Todo} from "../../../typeorm/entities/Todo";
import {Repository} from "typeorm";
import {UpdateTodoParams} from "../../types/UpdateTodoParams.type";
import {CreateTodoParams} from "../../types/CreateTodoParams.type";

@Injectable()
export class TodosService {

    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {
    }

    listTodos(){
        return this.todoRepository.find();
    }

    CreateTodo(createTodoDetails: CreateTodoParams){
        const newTodo = this.todoRepository.create({ ...createTodoDetails})
        this.todoRepository.save(newTodo);
    }

    UpdateTodo(id_todo: number, updateTodoDetails: UpdateTodoParams){
        this.todoRepository.update({id_todo}, {...updateTodoDetails});
    }

    DeleteTodo(id_todo: number){
        this.todoRepository.delete({id_todo});
    }
}
