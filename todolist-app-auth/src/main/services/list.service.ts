import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from '../entities/list.entity';
import { Repository } from 'typeorm';
import { UpdateListDto } from '../dto/updateList.dto';
import { CreateListDto } from '../dto/createList.dto';
import { User } from '../../users/user.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List) private listRepository: Repository<List>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAllLists(id_user: number) {
    return await this.listRepository.find({
      where: { user: { id_user } },
    });
  }

  async findListById(id_list: number) {
    return await this.listRepository.findOne({
      where: { id_list },
      relations: ['todos'],
    });
  }

  async createList(createListDto: CreateListDto, id_user: number) {
    const newList = new List();
    newList.title = createListDto.title;
    newList.description = createListDto.description;
    newList.user = await this.userRepository.findOne({
      where: { id_user },
    });
    //newList.archivated_at = new Date(); -> potrebuje dodelat kdy bude archyvovano

    return await this.listRepository.save(newList);
  }

  async updateList(id_list: number, updateListDto: UpdateListDto) {
    const list = await this.listRepository.findOne({
      where: { id_list },
    });
    list.title = updateListDto.title;
    list.description = updateListDto.description;

    return await this.listRepository.save(list);
  }

  async deleteList(id_list: number) {
    await this.listRepository.delete({ id_list });
  }
}
