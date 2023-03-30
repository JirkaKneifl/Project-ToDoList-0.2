import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { List } from "../entities/list.entity";
import { Repository } from "typeorm";
import { UpdateListDto } from "../dto/updateList.dto";
import { CreateListDto } from "../dto/createList.dto";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(List) private listRepository: Repository<List>
  ) {}

  async findeAllLists(){
    return await this.listRepository.find();
  }

  async findeListById(id_list: number){
    return await this.listRepository.findOne({
      where: { id_list },
      relations: ['todos'],
    });
  }

  async createList(createListDto: CreateListDto){
    const newList = new List();
    newList.title = createListDto.title;
    newList.description = createListDto.description;
    //newList.archivated_at = new Date(); -> potrebuje dodelat kdy bude archyvovano

    return await this.listRepository.save(newList);
  }

  async updateList(id_list: number, updateListDto: UpdateListDto){
    const list = await this.listRepository.findOne({
      where: { id_list },
    });
    list.title = updateListDto.title;
    list.description = updateListDto.description;

    return await this.listRepository.save(list);
  }

  async deleteList(id_list: number){
    await this.listRepository.delete({ id_list });
  }
}