import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './local.strategy';
import { User } from '../typeorm/entities/User';
import { AuthController } from './controllers/auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './services/constants';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/services/users/users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [AuthService, LocalStrategy, UsersService],
    controllers: [AuthController],
})
export class AuthModule {}
