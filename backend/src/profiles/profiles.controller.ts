import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ProfilesService } from './profiles.services';
import { AuthGuard } from '../auth/auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ProfileInfoDto } from './dtos/profile-info.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('/profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get()
  getById(@Query('id') id: string) {
    return this.profilesService.findById(parseInt(id));
  }

  @UseGuards(AuthGuard)
  @Get('/me')
  @Serialize(ProfileInfoDto)
  getMe(@Request() req) {
    return this.profilesService.getUserInfo(req.user.sub);
  }

  @UseGuards(AuthGuard)
  @Patch('/update')
  updateMe(@Request() req, @Body() body: UpdateUserDto) {
    return this.profilesService.updateUser(req.user.sub, body);
  }
}
