import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {CreateUserDto} from "../../dtos/CreateUser.dto";
import {UsersService} from "../../services/users/users.service";
import {UpdateUserDto} from "../../dtos/UpdateUser.dto";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){

    }

    @Get()
    async GetUser(){
        const users = await this.userService.FindAllUsers();
        return users;
    }

    @Post()
    CreateUser(@Body() createUserDto: CreateUserDto){
        this.userService.CreateUser(createUserDto);
    }

    @Put(':id_user')
    async UpdateUserById(
        @Param('id_user', ParseIntPipe) id_user: number,
        @Body() updateUserDto: UpdateUserDto
    ){
        await this.userService.UpdateUser(id_user, updateUserDto);
    }

    @Delete(':id_user')
    async DeleteUserById(
        @Param('id_user', ParseIntPipe) id_user: number
    ){
        await this.userService.DeleteUser(id_user);
    }
}
