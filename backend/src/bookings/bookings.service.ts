import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookings } from './bookings.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { PropertiesService } from 'src/properties/properties.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings) private repo: Repository<Bookings>,
    private readonly usersService: UsersService,

    private readonly propertiesService: PropertiesService,
  ) {}

  async getUserBookings(id: number) {
    return this.repo.find({
      where: { user: { id } },
      relations: ['property'],
      select: {
        id: true,
        check_in: true,
        check_out: true,
        status: true,
        total_price: true,
        property: {
          id: true,
          name: true,
          city: true,
        },
      },
    });
  }

  async submitUserBooking(
    propertyId: number,
    userId: number,
    total: number,
    checkIn: string,
    checkOut: string,
  ) {
    const user = await this.usersService.findOne(userId);
    const property = await this.propertiesService.findOne(propertyId);

    const booking = this.repo.create({
      user,
      property,
      check_in: checkIn,
      check_out: checkOut,
      total_price: total,
      status: 0,
    });

    return this.repo.save(booking);
  }
}
