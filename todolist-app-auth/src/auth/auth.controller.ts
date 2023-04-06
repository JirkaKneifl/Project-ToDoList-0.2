import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateUserDto } from '../users/dto/createUser.dto';
import { UsersService } from '../users/users.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    /*
    return await this.userService.findUserById(req.user.id_user);
    */
    return req.user;
  }

  @Post('auth/register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @UseGuards(GoogleAuthGuard)
  @Get('auth/google')
  async googleAuth(@Req() req) {}

  @UseGuards(GoogleAuthGuard)
  @Get('auth/google-redirect')
  googleAuthRedirect(@Req() req) {
    // handle your Google response here
    return this.authService.googleLogin(req.user);
  }
}
