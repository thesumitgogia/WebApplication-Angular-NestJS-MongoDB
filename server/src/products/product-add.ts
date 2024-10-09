import { IsString, MaxLength, IsEmail, MinLength } from 'class-validator';

export class ProductDTO {
    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsString()
    readonly imageUrl: string;

    @IsString()
    readonly price: string;
}
