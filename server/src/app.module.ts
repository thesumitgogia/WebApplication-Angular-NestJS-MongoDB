import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_API), // Connect to MongoDB MONGODV_LOCAL_API for local
    UserModule,
    AuthModule,
    ProductsModule,
  ],
  controllers: [AppController],
  exports:[]
})
export class AppModule {}
