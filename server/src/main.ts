import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '../../client/dist/client'));
  // app.useGlobalPipes(new ValidationPipe({
  //   transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
  // }));
  await app.listen(3000);
}
bootstrap();
