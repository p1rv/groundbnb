import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reviews } from './reviews.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Reviews) private repo: Repository<Reviews>) {}

  getReview(id: number) {
    return this.repo.findOneBy({ id });
  }
}
