import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload';
import { UserService } from 'src/user/user.service';
import 'dotenv/config';
import { UserProfile } from './userProfile.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true, // true only for testing it ingore is time expired or not
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: JwtPayload): Promise<UserProfile> {
        // const user = await this.userService.findById(payload.email);
        // if (!user) {
        //     throw new UnauthorizedException();
        // }
        // console.log("Hy Payload: ", payload);
        
        return {
            name: payload.name,
            email: payload.email,
            id: payload.id
        };
    }
}
