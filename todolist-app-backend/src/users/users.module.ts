import { Module } from '@nestjs/common';
import { UsersController } from './controlers/users/users.controller';
import { UsersService } from './services/users/users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../typeorm/entities/User";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
