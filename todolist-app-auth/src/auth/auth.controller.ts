import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    console.log('req', req);
    console.log('req.user', req.user);
    return req.user;
  }
}
