import { Injectable } from '@nestjs/common';
import {List} from "../../../typeorm/entities/List";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateListParams} from "../../types/CreateListParams.type";
import {UpdateListParams} from "../../types/UpdateListParams.type";
import {Todo} from "../../../typeorm/entities/Todo";


@Injectable()
export class ListsService {

    constructor(@InjectRepository(List)private listRepository: Repository<List>) {
    }

    //funkce co navraci vsechny listy
    listLists(){
        return this.listRepository.find();
    }

    //funkce co vraci listy se seznamem todocek
    async findListById(id_list: number){
        //console.log("service");
        return await this.listRepository.findOne({
            where: {id_list},
            relations: ['todos']
        });
    }

    //funkce pro vytvoreni listu
    async createList(createListDto){
        const newList = new List();
        newList.title = createListDto.title;
        newList.description = createListDto.description;
        //newList.archivated_at = new Date(); -> potrebuje dodelat kdy bude archyvovano

        return await this.listRepository.save(newList);
    }

    //funkce pro upraveni listu
    async updateList(id_list: number, updateListDetails: UpdateListParams){
        const list = await this.listRepository.findOne({
            where: {id_list}
        });
        list.title = updateListDetails.title;
        list.description = updateListDetails.description;

        return await this.listRepository.save(list);
    }

    DeleteList(id_list: number){
        this.listRepository.delete({id_list});
    }
}
