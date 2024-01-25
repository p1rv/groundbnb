import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  create(email: string, password: string, nick: string) {
    const user = this.repo.create({ email, password, nick });

    return this.repo.save(user);
  }

  findOne(id: number) {
    if (!id) return null;

    return this.repo.findOneBy({ id });
  }

  find(email: string) {
    return this.repo.find({
      where: { email },
      relations: ['userProfile', 'properties', 'properties.amenities'],
    });
  }
}
