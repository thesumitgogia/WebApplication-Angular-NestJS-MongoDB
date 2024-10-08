import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from 'src/auth/user.interfacae';

@Controller('api/user')
export class UserController {
    constructor() { }
    @UseGuards(AuthGuard('jwt'))
    @Post('profile')
    getProfile(@Request() req: AuthenticatedRequest) {
        return req.user;  // Should contain the validated user
    }
}