import { Module } from '@nestjs/common';
import { TodosService } from './services/todos/todos.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "../typeorm/entities/Todo";
import {List} from "../typeorm/entities/List";

@Module({
  imports: [TypeOrmModule.forFeature([Todo, List])],
  providers: [TodosService]
})
export class TodosModule {}
