import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ListService } from './services/list.service';
import { TodoService } from './services/todo.service';
import { CreateListDto } from './dto/createList.dto';
import { UpdateListDto } from './dto/updateList.dto';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GoogleAuthGuard } from '../auth/guards/google-auth.guard';

@Controller('main/:idUser')
export class MainController {
  constructor(
    private listService: ListService,
    private todoService: TodoService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async findAllList(@Param('idUser') idUser: string) {
    return await this.listService.findAllLists(Number(idUser));
  }

  //--------------------LIST--------------------
  @Post('/createList')
  async CreateList(
    @Param('idUser') idUser: string,
    @Body() createListDto: CreateListDto,
    @Res() res,
  ) {
    await res.redirect(`/main/${idUser}`);
    return this.listService.createList(createListDto, Number(idUser));
  }

  @Get('/:idList')
  async findListById(@Param('idList') idList: string) {
    return await this.listService.findListById(Number(idList));
  }

  @Get('/:idList/listUpdate')
  async GetListData(
    @Param('idList') idList: string,
    @Param('idUser') idUser: string,
  ) {
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

  //--------------------TODO--------------------
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

  @Post('/:idList/checked/:idTodo')
  async CheckTodo(
    @Param('idTodo') idTodo: string,
    @Body('is_done') is_done: boolean,
  ) {
    return await this.todoService.checkTodo(Number(idTodo), is_done);
  }

  @Get('/:idList/checked/:idTodo')
  async GetCheckTodo(@Param('idTodo') idTodo: string) {
    return await this.todoService.findTodoById(Number(idTodo));
  }

  @Get('/:idList/countCompletedTodos')
  async CountCompletedTodos(@Param('idList') idList: number) {
    return await this.todoService.countCompletedTodos(idList);
  }

  @Get('/:idList/countTodos')
  async CountTodos(@Param('idList') idList: number) {
    return await this.todoService.findeAllTodosByIdList(idList);
  }
}
