import { Controller, Post, Body, Res, UseGuards, Get, Request, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user/login-user';
import { RegistesrUserDto } from './dto/register-user/register-user';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/user')
export class UserController {
    constructor(private userService: UserService, private authService: AuthService) { }

    @Post('register') 
    @UsePipes(new ValidationPipe())
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
            // console.log(await this.userService.findById("admin@root.com"));
            // await this.userService.findById()
            return res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('profile')
    getProfile(@Request() req) {
        return req.user;  // Should contain the validated user
    }



}