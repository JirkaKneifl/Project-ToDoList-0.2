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

  async findUserById(id: number): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { id_user: id },
    });
    const userToSend = { ...user, password: undefined };

    return userToSend;
  }

  async createUser(createUserDto: CreateUserDto) {
    const password = EncodePassword(createUserDto.password);
    const newUser = await this.userRepository.create({
      ...createUserDto,
      password,
    });
    return await this.userRepository.save(newUser);
  }

  async createUserFromGoogle(
    first_name: string,
    last_name: string,
    email: string,
    picture: string,
  ): Promise<User> {
    const newUser = new User(first_name, last_name, email, picture);
    return await this.userRepository.save(newUser);
  }
}
