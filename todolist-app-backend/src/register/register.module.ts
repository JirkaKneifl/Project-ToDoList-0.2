import { Module } from '@nestjs/common';
import { RegisterController } from './controllers/register/register.controller';
import { RegisterService } from './services/register/register.service';
import {User} from "../typeorm/entities/User";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersService} from "../users/services/users/users.service";


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [RegisterController],
  providers: [RegisterService, UsersService]
})
export class RegisterModule {}
