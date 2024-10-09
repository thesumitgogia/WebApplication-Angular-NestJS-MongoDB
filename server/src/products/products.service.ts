import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './products.schema';
import { Model, Types, isValidObjectId } from 'mongoose';
import { ProductDTO } from './product-add';
import { UUID } from 'crypto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) { }
    async getProduct(): Promise<Product[]> {
        const products = await this.productModel.find<Product>();
        console.log(products)
        return products;
    }

    async getProductById(productId: string): Promise<ProductDocument> {
        console.log(productId);
        // const id = new Types.ObjectId(productId)
        // console.log(productId);

        const products = await this.productModel.findById<ProductDocument>({ _id: productId}).exec();
        console.log(products)
        return products;
    }

    async insertProduct(product: ProductDTO): Promise<ProductDocument> {
        // console.log(productId);
        // const id = new Types.ObjectId(productId)
        // console.log(id);

        const products = await this.productModel.create(product);
        console.log(products)
        return products;
    }
}
