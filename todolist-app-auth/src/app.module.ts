import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { List } from './main/entities/list.entity';
import { Todo } from './main/entities/todo.entity';
import { MainModule } from "./main/main.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'todo-list-app',
      entities: [User, List, Todo],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    MainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
