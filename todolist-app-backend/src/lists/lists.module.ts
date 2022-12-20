import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {List} from "../typeorm/entities/List";
import {ListsService} from "./services/lists/lists.service";

@Module({
    imports: [TypeOrmModule.forFeature([List])],
    providers: [ListsService]
})
export class ListsModule {}
