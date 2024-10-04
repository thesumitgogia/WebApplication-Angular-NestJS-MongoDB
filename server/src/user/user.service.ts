import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { LoginUserDto } from './dto/login-user/login-user';
import { RegistesrUserDto } from './dto/register-user/register-user';
import { comparePassword, hashPassword } from 'src/utils/passwordUtils';
import { AuthService } from 'src/auth/auth.service';
import { v4 as uuidv4 } from 'uuid';
import { AccessTokenResponse } from 'src/auth/auth.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>, private authService: AuthService
    ) { }
    async createUser(createUserDto: RegistesrUserDto): Promise<AccessTokenResponse> {
        // const createdUser = new this.userModel(createUserDto);
        const uid = uuidv4();
        const createdUser = new this.userModel(
            {
                _id: uid,
                name: createUserDto.name,
                email: createUserDto.email,
                password: await hashPassword(createUserDto.password)
            }
        );
        const user = await createdUser.save();
        return this.authService.login(user)
    }

    async loginUser(loginUserDto: LoginUserDto): Promise<AccessTokenResponse> {
        const user = await this.userModel.findOne<UserDocument>({
            email: loginUserDto.email
        }
        ).exec();

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const isPasswordMatch = await comparePassword(loginUserDto.password, user.password);

        if (!isPasswordMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return this.authService.login(user)
    }

    // user.service.ts
    async findById(id: string): Promise<UserDocument> {
        const user = this.userModel.findOne({ email: id }).exec();
        // console.log(user);
        return user;
    }

    async findAll(): Promise<User[]> {
        return await this.userModel?.find().exec();
    }
}
