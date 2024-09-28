import { IsString, Min, MaxLength, IsEmail } from 'class-validator';

export class LoginUserDto {
    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;
}
