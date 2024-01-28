import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profiles } from './profiles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
  constructor(@InjectRepository(Profiles) private repo: Repository<Profiles>) {}

  findById(id: number) {
    return this.repo.findOneBy({ user: { id } });
  }

  getUserInfo(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['user'] });
  }
}
