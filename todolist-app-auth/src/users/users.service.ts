import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { EncodePassword } from './utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findUserByUsername(username: string): Promise<User | undefined> {
    const email = username;
    const data = await this.userRepository.findOne({
      where: { email },
    });
    return data;
  }

  async createUser(createUserDto: CreateUserDto) {
    const password = EncodePassword(createUserDto.password);
    const newUser = await this.userRepository.create({
      ...createUserDto,
      password,
    });
    return await this.userRepository.save(newUser);
  }
}
