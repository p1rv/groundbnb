import { Controller, Get } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
// @Serialize(UserDto)
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Get()
  getAllProperties() {
    return this.propertiesService.getAll();
  }
}
