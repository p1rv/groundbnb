import { Controller } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('/bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}
}
