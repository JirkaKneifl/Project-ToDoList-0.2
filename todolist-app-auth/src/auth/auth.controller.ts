import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateUserDto } from '../users/dto/createUser.dto';
import { UsersService } from '../users/users.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import jwtDecode from 'jwt-decode';

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
  async googleAuthRedirect(@Req() req, @Res() res) {
    console.log('req.user', req.user);

    let user = await this.userService.findUserByUsername(req.user.email);
    if (!user) {
      const createdUserData = await this.userService.createUserFromGoogle(
        req.user.firstName,
        req.user.lastName,
        req.user.email,
        req.user.picture,
      );
      console.log('createdUserData', createdUserData);
    }
    user = await this.userService.findUserByUsername(req.user.email);
    const accessToken = await this.authService.googleLogin(user);

    console.log(jwtDecode(accessToken.access_token));
    console.log('accessToken', accessToken);
    console.log('USER', user);

    res.cookie('jwt', accessToken.access_token, {
      httpOnly: false,
      secure: false,
      maxAge: 100000,
      sameSite: false,
      sameOrigin: false,
    });
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.redirect(`http://localhost:3000/googleRedirect/${user.id_user}`);
  }
}
