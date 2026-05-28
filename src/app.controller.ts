import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/name')
  getName(): string {
    return this.appService.getName();
  }

  @Get('/book')
  getBook(): string {
    return this.appService.getBook();
  }

  @Get('/Json')
  getJson(): object {
    return this.appService.getJson();
  }
}
