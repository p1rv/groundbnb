import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookings } from './bookings.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { PropertiesService } from 'src/properties/properties.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings) private repo: Repository<Bookings>,
    @Inject(UsersService) private readonly usersService: UsersService,
    @Inject(PropertiesService)
    private readonly propertiesService: PropertiesService,
  ) {}

  async getUserBookings(id: number) {
    return this.repo.find({
      where: { user: { id } },
      relations: ['user'],
    });
  }

  async submitUserBooking(
    propertyId: number,
    userId: number,
    total: number,
    checkIn: number,
    checkOut: number,
  ) {
    const user = await this.usersService.findOne(userId);
    const property = await this.propertiesService.findOne(propertyId);

    const booking = this.repo.create({
      user: user.id,
      property,
      check_in: checkIn,
      check_out: checkOut,
      total_price: total,
      status: 0,
    });
  }
}
