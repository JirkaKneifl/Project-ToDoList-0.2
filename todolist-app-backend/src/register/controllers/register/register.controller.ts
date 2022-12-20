import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto} from "../../../users/dtos/CreateUser.dto";
import {UsersService} from "../../../users/services/users/users.service";

@Controller('register')
export class RegisterController {

    constructor(private userService: UsersService) {
    }

    @Get()



    @Post('')
    CreateUser(@Body() createUserDto: CreateUserDto){
        return this.userService.CreateUser(createUserDto);
    }
}
