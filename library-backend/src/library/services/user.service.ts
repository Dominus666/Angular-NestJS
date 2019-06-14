import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces';
import { CreateUserDTO } from '../dto';

@Injectable()

export class UserService {
    constructor(@InjectModel('Users') private readonly userModel: Model<User>) { }
    async addUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = await new this.userModel(createUserDTO);
        return newUser.save();
    }
}