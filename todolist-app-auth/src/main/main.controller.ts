import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ListService } from './services/list.service';
import { TodoService } from './services/todo.service';
import { CreateListDto } from './dto/createList.dto';
import { UpdateListDto } from './dto/updateList.dto';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';

@Controller('main')
export class MainController {
  constructor(
    private listService: ListService,
    private todoService: TodoService,
  ) {}

  @Get('/:idUser')
  async findAllList(@Param('idUser') idUser: string) {
    return await this.listService.findAllLists(Number(idUser));
  }

  @Post('/createList')
  async CreateList(@Body() createListDto: CreateListDto, @Res() res) {
    await res.redirect('http://localhost:3000/main/');
    return this.listService.createList(createListDto);
  }

  @Get('/:idList')
  async findListById(@Param('idList') idList: string) {
    return await this.listService.findListById(Number(idList));
  }

  @Get('/:idList/listUpdate')
  async GetListData(@Param('idList') idList: string) {
    return await this.listService.findListById(Number(idList));
  }

  @Put('/:idList/listUpdate')
  async UpdateList(
    @Param('idList') idList: string,
    @Body() updateListDto: UpdateListDto,
  ) {
    return await this.listService.updateList(Number(idList), updateListDto);
  }

  @Delete('/:idList/deleteList')
  async DeleteList(@Param('idList') idList: string) {
    return await this.listService.deleteList(Number(idList));
  }

  @Post('/:idList/createTodo')
  async CreateTodo(
    @Param('idList') idList: string,
    @Body() createTodoDto: CreateTodoDto,
  ) {
    return await this.todoService.createTodo(Number(idList), createTodoDto);
  }

  @Get('/:idList/updateTodo/:idTodo')
  async GetTodoData(
    @Param('idList') idList: string,
    @Param('idTodo') idTodo: string,
  ) {
    console.log(await this.todoService.findTodoById(Number(idTodo)));
    return await this.todoService.findTodoById(Number(idTodo));
  }

  @Put('/:idList/updateTodo/:idTodo')
  async UpdateTodo(
    @Param('idList') idList: string,
    @Param('idTodo') idTodo: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return await this.todoService.UpdateTodo(
      Number(idList),
      Number(idTodo),
      updateTodoDto,
    );
  }

  @Delete('/:idList/deleteTodo/:idTodo')
  async DeleteTodo(@Param('idTodo') idTodo: string) {
    return await this.todoService.deleteTodo(Number(idTodo));
  }
}
