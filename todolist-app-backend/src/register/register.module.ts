import { Module } from '@nestjs/common';
import { RegisterController } from './controllers/register/register.controller';
import { RegisterService } from './services/register/register.service';


@Module({
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
