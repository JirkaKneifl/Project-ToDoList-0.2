import { Module } from '@nestjs/common';
import { MainController } from './controllers/main/main.controller';
import { MainService } from './services/main/main.service';
import {TodosService} from "../todos/services/todos/todos.service";
import {ListsService} from "../lists/services/lists/lists.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "../typeorm/entities/Todo";
import {List} from "../typeorm/entities/List";


@Module({
  imports: [TypeOrmModule.forFeature([Todo,List])],
  controllers: [MainController],
  providers: [MainService, TodosService, ListsService]
})
export class MainModule {}
