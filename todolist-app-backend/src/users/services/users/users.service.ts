import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../../typeorm/entities/User";
import {Repository} from "typeorm";
import {CreateUserParams} from "../../types/CreateUserParams.type";
import {UpdateUserParams} from "../../types/UpdateUserParams.type";
import {EncodePassword} from "../../utils/bcrypt";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)private userRepository: Repository<User>) {
    }


    FindAllUsers(){
        return this.userRepository.find();
    }

    CreateUser(creteUserDetails: CreateUserParams){
        const password = EncodePassword(creteUserDetails.password);
        const newUser = this.userRepository.create({ ...creteUserDetails, password});
        return this.userRepository.save(newUser);
    }

    UpdateUser(id_user: number , updateUserDetails: UpdateUserParams){
        return this.userRepository.update({id_user}, { ...updateUserDetails});
    }

    DeleteUser(id_user: number){
        return this.userRepository.delete({id_user})
    }
}
