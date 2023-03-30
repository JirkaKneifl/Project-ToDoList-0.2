import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { List } from "./entities/list.entity";
import { Todo } from "./entities/todo.entity";
import { ListService } from "./services/list.service";
import { TodoService } from './services/todo.service';
import { MainController } from "./main.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Todo, List])],
  controllers: [MainController],
  providers: [TodoService, ListService],
})
export class MainModule {}