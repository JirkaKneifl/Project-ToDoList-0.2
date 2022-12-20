import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {ListsService} from "../../../lists/services/lists/lists.service";
import {TodosService} from "../../../todos/services/todos/todos.service";
import {CreateTodoDto} from "../../../todos/dtos/CreateTodo.dto";
import {CreateListDto} from "../../../lists/dtos/CreateList.dto";

@Controller('main')
export class MainController {

    constructor(private listService: ListsService, private todoService: TodosService) {
    }

    @Get()
    listTodos(){
        return this.todoService.listTodos();
    }


    @Post('/addTodo')
    CreateTodo(@Body() createTodoDto: CreateTodoDto){
       return this.todoService.CreateTodo(createTodoDto);
    }

    @Post('/addList')
    CreateList(@Body() createListDto: CreateListDto){
        return this.listService.CreateList(createListDto);
    }
}
