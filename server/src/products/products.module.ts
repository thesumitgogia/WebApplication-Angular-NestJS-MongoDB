import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './products.schema';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsMiddleware } from './products.middleware';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
    controllers:[ProductsController],
    providers: [ProductsService],
    exports:[ProductsService]
})
export class ProductsModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(ProductsMiddleware)
            .forRoutes(ProductsController); // Apply middleware to specific routes
    }
}
