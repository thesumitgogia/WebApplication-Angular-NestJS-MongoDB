import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.schema';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async login(user: User) {
        const payload = { email: user.email};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
