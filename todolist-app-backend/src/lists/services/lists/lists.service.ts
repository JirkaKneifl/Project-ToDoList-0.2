import { Injectable } from '@nestjs/common';
import {List} from "../../../typeorm/entities/List";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateListParams} from "../../types/CreateListParams.type";
import {UpdateListParams} from "../../types/UpdateListParams.type";


@Injectable()
export class ListsService {

    constructor(@InjectRepository(List)private listRepository: Repository<List>) {
    }

    listLists(){
        return this.listRepository.find();
    }

    findListById(id_list: number){
        console.log("service");
        return this.listRepository.findOne({
            where: { id_list }
        });
    }

    CreateList(createListDetails: CreateListParams){
        const newList = this.listRepository.create({ ...createListDetails})
        return this.listRepository.save(newList);
    }

    UpdateList(id_list: number, updateListDetails: UpdateListParams){
        this.listRepository.update({id_list}, {...updateListDetails});
    }

    DeleteList(id_list: number){
        this.listRepository.delete({id_list});
    }
}
