import {Controller, Get} from '@nestjs/common';

@Controller('login')
export class LoginController {

    @Get()
    getMsg(){
        return { msg: 'hallo world!' };
    }
}
