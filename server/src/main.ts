import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Use CORS middleware
  // app.enableCors();
  app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from Angular app
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Allow credentials such as cookies or Authorization headers
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  });
  // Use CORS middleware
  app.useStaticAssets(join(__dirname, '../../client/dist/client'));
  // app.useGlobalPipes(new ValidationPipe({
  //   transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
  // }));
  
  await app.listen(3000);
}
bootstrap();
