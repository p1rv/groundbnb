import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { AuthGuard } from '../auth/auth.guard';
import { SubmitBookingDto } from './dtos/submit-booking.dto';

@Controller('/bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @UseGuards(AuthGuard)
  @Post('/submit')
  submitBooking(@Request() req, @Body() data: SubmitBookingDto) {
    return this.bookingsService.submitUserBooking(
      data.propertyId,
      req.user.sub,
      data.total,
      data.checkIn,
      data.checkOut,
    );
  }

  @UseGuards(AuthGuard)
  @Get('/me')
  getMyBookings(@Request() req) {
    return this.bookingsService.getUserBookings(req.user.sub);
  }
}
