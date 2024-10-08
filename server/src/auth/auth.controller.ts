import { Controller, Post, Body, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginUserDto } from '../auth/dto/login-user/login-user';
import { RegistesrUserDto } from '../auth/dto/register-user/register-user';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('api/auth/')
export class AuthController {
    constructor(private authService: AuthService) { }

    /* 
        make request to /api/auth/register 
        request body: {
            name: "John Doe", required: true, type: string, MinLength: 3, MaxLength: 20
            email: "johndoe@example.com", required: true, type: string, isEmail: true
            password: "password123" required: true, type: string, MinLength: 6
        }
        try to insert user into webApp/users collection
        return: {
        status: 200,
        message: "Register successful",
        access_token: {JWT Token}
        }
        handle error {
        status: 400,
        message: "Validation failed" Reason: email already exist or email not unique
        }
        
    */
    @Post('register')
    @UsePipes(new ValidationPipe())
    async register(@Body() registesrUserDto: RegistesrUserDto, @Res() res: Response): Promise<{}> {
        try {
            const user = await this.authService.createUser(registesrUserDto);
            return res.status(200).json({ message: 'Register successful', user });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
        try {
            const user = await this.authService.loginUser(loginUserDto);
            // console.log(await this.userService.findById("admin@root.com"));
            // await this.userService.findById()
            return res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }


    // @UseGuards(AuthGuard('jwt'))
    // @Post('profile')
    // getProfile(@Request() req: AuthenticatedRequest) {
    //     return req.user;  // Should contain the validated user
    // }


}