import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwt-payload';
import { UserDocument } from '../user/user.schema'; 
import 'dotenv/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true, // true only for testing 
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: JwtPayload): Promise<UserDocument> {
        console.log('JWT Payload:', payload);
        const user = await this.userService.findById(payload.email);
        // console.log('Validated User:', user);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
