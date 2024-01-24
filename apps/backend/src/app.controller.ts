import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('places')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getAll')
  getAll(): string {
    return this.appService.getAll();
  }
}
