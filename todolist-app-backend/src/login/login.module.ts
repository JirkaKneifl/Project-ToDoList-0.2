import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login/login.controller';
import { LoginService } from './services/login/login.service';


@Module({
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
