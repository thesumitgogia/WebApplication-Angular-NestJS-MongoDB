import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, isValidObjectId } from 'mongoose';
import { UUID } from 'crypto';
import { Cart, CartDocument } from './cart.schema';
import { CartDto } from './dto/cart-dto';
import { ProductsService } from 'src/products/products.service';
import { ProductDocument } from 'src/products/products.schema';

@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private readonly cartModel: Model<CartDocument>, private productService: ProductsService) { }

    async addProductIntoCart(userId: string, productId: string): Promise<CartDocument> {
        const products = await this.cartModel.create({
            userId: userId,
            productId: productId
        });
        console.log(products)
        return products;
    }

    async getAllProductsFromCart(userId: string): Promise<any> {
        const products = await this.cartModel.find({
            userId: userId,
        });
        const productIds = products.map(cartItem => cartItem.productId);
        const cartProductId = products.map(cartId => cartId._id);
        // console.log("Cart Product ID: ", cartProductId);
        
        const productDetails = await Promise.all(
            productIds.map(async (productId) => {
                return await this.productService.getProductById(productId);
            })
        );
        // console.log(productDetails);
        
        return {
            products: productDetails,
            cartIds: cartProductId,
        };
    }


    async removeProduct(id: string): Promise<any> {
        const products = await this.cartModel.deleteOne({
            _id: id,
        });
        console.log(products)
        return products;
    }
}
