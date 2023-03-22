import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import { RegisterDto, LoginDto } from '../../dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../../../users/services/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userSerrvice: UsersService, private jwtService: JwtService) {}

    async validateUser(first_name: string, pass: string): Promise<any> {
        const user = await this.userSerrvice.FindUserByName(first_name);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        } else {
            return null;
        }
    }

    async login(user: any) {
        const payload = { first_name: user.first_name, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    /*
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async register(registerDto: RegisterDto): Promise<User> {
        const user = new User();
        user.first_name = registerDto.first_name;
        user.last_name = registerDto.last_name;
        user.email = registerDto.email;
        user.phone = registerDto.phone;
        user.password = await bcrypt.hash(registerDto.password, 10);
        return this.userRepository.save(user);
    }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.userRepository.findOne({
            where: { email },
        });
        if (!user) {
            throw new UnauthorizedException();
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException();
        }
        return user;
    }
 */
}
