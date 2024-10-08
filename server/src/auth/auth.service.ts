import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '../user/user.schema';
import { AccessTokenResponse } from './auth.interface';
import { RegistesrUserDto } from 'src/auth/dto/register-user/register-user';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { getUid } from 'src/utils/uuidUtils';
import { comparePassword, hashPassword } from 'src/utils/passwordUtils';
import { LoginUserDto } from './dto/login-user/login-user';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, @InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

    async login(user: User): Promise<AccessTokenResponse> {
        const payload = { email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    /*
        @params (name: string, email: string, password: string)
        hashPassword using bcrypt
        Creates a new user in the database and returns a JWT token for the user.
     */

    async createUser(createUserDto: RegistesrUserDto): Promise<AccessTokenResponse> {
        const createdUser = new this.userModel(
            {
                _id: getUid(),
                name: createUserDto.name,
                email: createUserDto.email,
                password: await hashPassword(createUserDto.password)
            }
        );
        const user = await createdUser.save();
        const payload = { email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
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
        const payload = { email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
