import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookings } from './bookings.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {
  constructor(@InjectRepository(Bookings) private repo: Repository<Bookings>) {}
}
