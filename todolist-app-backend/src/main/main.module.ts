import { Module } from '@nestjs/common';
import { MainController } from './controllers/main/main.controller';
import { MainService } from './services/main/main.service';


@Module({
  controllers: [MainController],
  providers: [MainService]
})
export class MainModule {}
