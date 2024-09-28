import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_API), //process.env.MONGODB_LOCAL_API: for local database
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
