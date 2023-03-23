import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findUserByUsername(username: string): Promise<User | undefined> {
    console.log('username', username);
    const email = username;

    const data = await this.userRepository.findOne({
      where: { email },
    });

    console.log('data', data);
    return data;
  }
}
