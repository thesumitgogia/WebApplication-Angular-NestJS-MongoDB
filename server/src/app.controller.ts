import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('*')
  sendIndex(@Res() res: Response) {
    res.sendFile(join(__dirname, '../../client/dist/client/index.html'));
  }
}

