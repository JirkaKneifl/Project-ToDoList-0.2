import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { List } from "../entities/list.entity";
import { Todo } from "../entities/todo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateTodoDto } from "../dto/updateTodo.dto";
import { CreateTodoDto } from "../dto/createTodo.dto";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
    @InjectRepository(List) private listRepository: Repository<List>
  ) {}

  async createTodo(id_list: number, createTodoDto: CreateTodoDto) {
    const newTodo = new Todo();
    const list = await this.listRepository.findOne({
      where: { id_list },
    });

    newTodo.title = createTodoDto.title;
    newTodo.created_at = new Date();
    newTodo.list = list;

    await this.todoRepository.save(newTodo);
  }

  async findTodoById(id_todo: number) {
    return await this.todoRepository.findOne({
      where: { id_todo },
    });
  }

  async UpdateTodo(id_list: number, id_todo: number, updateTodoDto: UpdateTodoDto) {
    await this.todoRepository.update({ id_todo }, { ...updateTodoDto });
  }

  async deleteTodo(id_todo: number) {
    await this.todoRepository.delete({ id_todo });
  }
}
