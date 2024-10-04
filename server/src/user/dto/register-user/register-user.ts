import { IsString, Min, MaxLength, IsEmail, MinLength } from 'class-validator';

export class RegistesrUserDto {
    @IsString()
    @Min(3)
    @MaxLength(20)
    readonly name: string;

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(6)
    readonly password: string;
}
