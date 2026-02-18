import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'this is my first commit of nestjs for origin';
  }
}
