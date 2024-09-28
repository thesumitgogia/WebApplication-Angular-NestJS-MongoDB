import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { LoginUserDto } from './dto/login-user/login-user';
import { RegistesrUserDto } from './dto/register-user/register-user';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) { }

    // async create(userData: Omit<User, 'id'>): Promise<User> {
    //     const newUser = new this.userModel(userData);
    //     return await newUser.save();
    // }


    async createUser(createUserDto: RegistesrUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async loginUser(createUserDto: LoginUserDto): Promise<User> {
        const user = this.userModel.findOne(createUserDto);
        return user;
        // return await createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel?.find().exec();
    }
}
