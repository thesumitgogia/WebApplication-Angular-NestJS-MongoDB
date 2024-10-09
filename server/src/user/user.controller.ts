import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from 'src/auth/user.interfacae';

@Controller('api/user')
export class UserController {
    constructor() { }
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req: AuthenticatedRequest) {
        return req.user;  // Should contain the validated user
    }
}