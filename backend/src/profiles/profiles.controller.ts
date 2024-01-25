import { Controller, Get, Query } from '@nestjs/common';
import { ProfilesService } from './profiles.services';

@Controller('/profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get()
  getById(@Query('id') id: string) {
    return this.profilesService.findById(parseInt(id));
  }
}
