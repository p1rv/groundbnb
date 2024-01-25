import { InjectRepository } from '@nestjs/typeorm';
import { Amenities } from './amenities.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AmenitiesService {
  constructor(
    @InjectRepository(Amenities) private repo: Repository<Amenities>,
  ) {}

  getAll() {
    return this.repo.find({ relations: ['properties'] });
  }
}
