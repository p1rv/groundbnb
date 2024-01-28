import { Controller, Get, Param, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
// @Serialize(UserDto)
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Get()
  getAllProperties(@Query() query) {
    return this.propertiesService.getAll(query);
  }

  @Get('/:id')
  getOne(@Param() { id }) {
    return this.propertiesService.getOne(parseInt(id));
  }
}
