import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profiles } from './profiles.entity';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.services';

@Module({
  imports: [TypeOrmModule.forFeature([Profiles])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}
