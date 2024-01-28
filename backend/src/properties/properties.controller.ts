import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { AuthGuard } from '../auth/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UsersPropertyDto } from './dtos/user-property.dto';
// import { Serialize } from '../interceptors/serialize.interceptor';
// import { UsersPropertyDto } from './dtos/user-property.dto';

@Controller('properties')
// @Serialize(UserDto)
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Get()
  getAllProperties(@Query() query) {
    return this.propertiesService.getAll(query);
  }

  @UseGuards(AuthGuard)
  @Serialize(UsersPropertyDto)
  @Get('/me')
  getMyBookings(@Request() req) {
    return this.propertiesService.getUserProperties(req.user.sub);
  }

  @Get('/:id')
  getOne(@Param() { id }) {
    return this.propertiesService.getOne(parseInt(id));
  }
}
