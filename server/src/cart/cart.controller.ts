import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CartDto } from './dto/cart-dto';
import { CartService } from './cart.service';
import { Cart } from './cart.schema';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ProductDTO } from 'src/products/product-add';

@Controller('api/cart')
export class CartController {
    constructor(private cartService: CartService) { }
    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    addProductToCart(@Body() productDto: ProductDTO, @Req() req: Request) {
        const user: any = req.user;
        console.log(req.body);

        this.cartService.addProductIntoCart(user.id, req.body.productId);
        return req.user;
    }

    // @UseGuards(AuthGuard('jwt'))
    // @Get('get')
    // async getAllProducts(@Req() req: Request) {

    //     // const cartProducts = await this.cartService.getAllProductsFromCart();
    //     // console.log(cartProducts);
    //     console.log(req.user)
    //     return { data: "working" };
    // }


    @UseGuards(AuthGuard('jwt'))
    @Get('get')
    async getAllCartProducts(@Req() req: Request): Promise<any> {
        const user: any = req.user;
        const cartDetails = await this.cartService.getAllProductsFromCart(user.id);
        // console.log(cartProducts);
        console.log("From controller: ", cartDetails);

        return cartDetails;  // Should contain the validated user
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('remove/:productId')
    async deleteProduct(@Param('productId') productId: string) {
        const res = await this.cartService.removeProduct(productId);
        // const user: any = req.params;
        console.log("Cart Product ID: ", productId, res);


        return { message: `Product deleted ${productId}` }
    }


}
