import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.schema';
import { AccessTokenResponse } from './auth.interface';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async login(user: User): Promise<AccessTokenResponse> {
        const payload = { email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
