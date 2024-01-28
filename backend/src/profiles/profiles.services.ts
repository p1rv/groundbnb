import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profiles } from './profiles.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class ProfilesService {
  constructor(@InjectRepository(Profiles) private repo: Repository<Profiles>) {}

  findById(id: number) {
    return this.repo.findOneBy({ user: { id } });
  }

  getUserInfo(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: [
        'user',
        'user.bookings',
        'user.bookings.property',
        'user.properties',
      ],
    });
  }

  async updateUser(id: number, values: UpdateUserDto) {
    const profile = await this.repo.findOneBy({ id });

    profile.name = values.name;
    profile.surname = values.surname;
    profile.dob = values.dob;
    profile.city = values.city;
    profile.street = values.street;
    profile.building_no = values.building_no;
    profile.flat_no = values.flat_no;
    profile.phone = values.phone;
    profile.postal = values.postal;

    return this.repo.save(profile);
  }
}
