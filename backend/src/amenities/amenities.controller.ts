import { Controller, Get } from '@nestjs/common';
import { AmenitiesService } from './amenities.service';

@Controller('/amenities')
export class AmenitiesController {
  constructor(private amenitiesService: AmenitiesService) {}

  @Get()
  getAll() {
    return this.amenitiesService.getAll();
  }
}
