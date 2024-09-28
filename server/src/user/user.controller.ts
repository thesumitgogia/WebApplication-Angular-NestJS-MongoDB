import { Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user/login-user';
import { RegistesrUserDto } from './dto/register-user/register-user';

@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('register')
    async register(@Body() registesrUserDto: RegistesrUserDto, @Res() res: Response) {
        try {
            const user = await this.userService.createUser(registesrUserDto);
            return res.status(200).json({ message: 'Register successful', user });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
        try {
            const user = await this.userService.loginUser(loginUserDto);
            return res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}