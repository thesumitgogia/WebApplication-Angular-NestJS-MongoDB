import { IsString, MaxLength, IsEmail, MinLength } from 'class-validator';

export class RegistesrUserDto {
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    readonly name: string;

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(6)
    readonly password: string;
}
