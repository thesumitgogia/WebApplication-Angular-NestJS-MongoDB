import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // req.user = "Hello";
    console.log(req.url);
    (req as any).user = "SECRET KEY";

    next();
  }
}
