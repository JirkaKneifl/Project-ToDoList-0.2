import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto} from "../../../users/dtos/CreateUser.dto";
import {UsersService} from "../../../users/services/users/users.service";

@Controller('/register')
export class RegisterController {

    constructor(private userService: UsersService) {
    }

    @Post('')
    CreateUser(@Body() createUserDto: CreateUserDto){
        console.log("controler")
        console.log(createUserDto)
        return this.userService.CreateUser(createUserDto);
    }
}
