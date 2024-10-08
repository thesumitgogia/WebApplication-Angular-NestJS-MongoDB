import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { LoginUserDto } from '../auth/dto/login-user/login-user';
import { RegistesrUserDto } from '../auth/dto/register-user/register-user';
import { comparePassword, hashPassword } from 'src/utils/passwordUtils';
import { AuthService } from 'src/auth/auth.service';
import { AccessTokenResponse } from 'src/auth/auth.interface';
import { getUid } from 'src/utils/uuidUtils';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }
    // async createUser(createUserDto: RegistesrUserDto): Promise<AccessTokenResponse> {
    //     // const createdUser = new this.userModel(createUserDto);
    //     const createdUser = new this.userModel(
    //         {
    //             _id: getUid(),
    //             name: createUserDto.name,
    //             email: createUserDto.email,
    //             password: await hashPassword(createUserDto.password)
    //         }
    //     );
    //     const user = await createdUser.save();
    //     return this.authService.login(user)
    // }

    // async loginUser(loginUserDto: LoginUserDto): Promise<AccessTokenResponse> {
    //     const user = await this.userModel.findOne<UserDocument>({
    //         email: loginUserDto.email
    //     }
    //     ).exec();

    //     if (!user) {
    //         throw new NotFoundException('User not found');
    //     }

    //     const isPasswordMatch = await comparePassword(loginUserDto.password, user.password);

    //     if (!isPasswordMatch) {
    //         throw new UnauthorizedException('Invalid credentials');
    //     }
    //     return this.authService.login(user)
    // }

    // user.service.ts
    async findById(id: string): Promise<UserDocument> {
        const user = this.userModel.findOne({ email: id }).exec();
        // console.log(user);
        return user;
    }

    // async findAll(): Promise<User[]> {
    //     return await this.userModel?.find().exec();
    // }
}
