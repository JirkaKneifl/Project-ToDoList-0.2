import {Body, Controller, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ListsService} from "../../../lists/services/lists/lists.service";
import {TodosService} from "../../../todos/services/todos/todos.service";
import {CreateTodoDto} from "../../../todos/dtos/CreateTodo.dto";
import {CreateListDto} from "../../../lists/dtos/CreateList.dto";
import {UpdateListDto} from "../../../lists/dtos/UpdateList.dto";
import {Todo} from "../../../typeorm/entities/Todo";

@Controller('main')
export class MainController {

    constructor(private listService: ListsService, private todoService: TodosService) {
    }

    @Get('/')
    listLists(){
        //console.log("contoler get na zakladni routu")
        return this.listService.listLists();
    }

    @Post('/createList')
    CreateList(@Body() createListDto: CreateListDto){
        return this.listService.createList(createListDto);
    }

    @Get('/:idList')
    async findListById(@Param('idList') idList: string){

        return await this.listService.findListById(Number(idList));
    }


    @Get('/:idList/listUpdate')
    GetListData(@Param('idList') idList: string){
        return this.listService.findListById(Number(idList));
    }

    @Put('/:idList/listUpdate')
    async UpdateList(@Param('idList') idList: string, @Body() updateListDto: UpdateListDto){
        return await this.listService.updateList(Number(idList), updateListDto);
    }

    @Post('/:idList/createTodo')
    async CreateTodo(@Param('idList') idList: string, @Body() createTodoDto: CreateTodoDto){
        return this.todoService.createTodo(idList, createTodoDto);
    }
}
