import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.schema';
import { Request, Response } from 'express';
import { ProductDTO } from './product-add';
// import { Request } from 'express';

@Controller('api/products')
export class ProductsController {
    constructor(private productService: ProductsService) { }
    @Get('get')
    async getAllProducts(): Promise<Product[]> {
        console.log("This is all products");
        const products = await this.productService.getProduct();
        return products;
    }

    @Get(':id')
    async getProductDetail(@Param('id') id: string, @Res() res: Response): Promise<any> {
        // console.log(req);
        const product = await this.productService.getProductById(id);
        return res.status(200).json({ product: product });
    }

    @Post('/add')
    async insertProduct(@Body() productDto: ProductDTO, @Res() res: Response): Promise<any> {
        // console.log(req);
        const product = await this.productService.insertProduct(productDto);
        return res.status(200).json({ product: product });
    }
}
