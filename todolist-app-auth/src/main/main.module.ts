import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Todo } from './entities/todo.entity';
import { ListService } from './services/list.service';
import { TodoService } from './services/todo.service';
import { MainController } from './main.controller';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, List, User])],
  controllers: [MainController],
  providers: [TodoService, ListService, UsersService],
})
export class MainModule {}
