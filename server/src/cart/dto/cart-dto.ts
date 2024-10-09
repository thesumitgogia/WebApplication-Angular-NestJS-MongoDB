import { IsString } from 'class-validator';

export class CartDto {
    @IsString()
    readonly productId: string;
    @IsString()
    readonly userId: string;
}
