import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookings } from './bookings.entity';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bookings])],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
