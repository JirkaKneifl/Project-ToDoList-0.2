import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MainModule } from './main/main.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./typeorm/entities/User";
import {List} from "./typeorm/entities/List";
import {Todo} from "./typeorm/entities/Todo";

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
            synchronize: true
        }),
        LoginModule,
        RegisterModule,
        MainModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}