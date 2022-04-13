import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Translate } from './translate';

@Controller()
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Post('translate')
  async translate(@Body() translate: Translate): Promise<string> {
    return this.AppService.translate(
      translate.text,
      translate.to,
      translate.from,
    );
  }
}
