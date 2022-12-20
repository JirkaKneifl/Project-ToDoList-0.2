import { Module } from '@nestjs/common';
import { TodosService } from './services/todos/todos.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "../typeorm/entities/Todo";

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodosService]
})
export class TodosModule {}
