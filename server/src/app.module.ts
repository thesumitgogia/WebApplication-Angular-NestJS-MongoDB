import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_API), // Connect to MongoDB MONGODV_LOCAL_API for local
    UserModule,
    AuthModule,
    ProductsModule,
    CartModule,
  ],
  controllers: [AppController],
  exports:[],
  providers: []
})
export class AppModule {}
