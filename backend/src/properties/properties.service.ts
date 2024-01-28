import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Properties } from './properties.entity';
import { Like, Repository } from 'typeorm';
import { Users } from '../users/users.entity';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Properties) private repo: Repository<Properties>,
  ) {}

  create(
    owner: Users,
    name: string,
    description: string,
    postal: string,
    city: string,
    street: string | null,
    building_no: string,
    flat_no: string | null,
    rooms: number,
    area: number,
    kitchen: boolean,
    imgs: string[],
  ) {
    const property = this.repo.create({
      user: owner,
      name,
      description,
      postal,
      city,
      street,
      building_no,
      flat_no,
      rooms,
      area,
      kitchen,
      imgs,
    });

    return this.repo.save(property);
  }

  findOne(id: number) {
    if (!id) return null;

    return this.repo.findOneBy({ id });
  }

  find(name: string) {
    return this.repo.findBy({ name: Like(name) });
  }

  getAll(query) {
    if (!query || !query.search) {
      return this.repo
        .createQueryBuilder('property')
        .leftJoinAndSelect('property.reviews', 'review')
        .select('property.*')
        .addSelect('AVG(review.rating)', 'averageRating')
        .groupBy('property.id')
        .getRawMany();
    }

    const { search } = query;
    return this.repo
      .createQueryBuilder('property')
      .leftJoinAndSelect('property.reviews', 'review')
      .select('property.*')
      .addSelect('AVG(review.rating)', 'averageRating')
      .where(`property.name ILIKE '%${search}%'`)
      .orWhere(`property.city ILIKE '%${search}%'`)
      .orWhere(`property.street ILIKE '%${search}%'`)
      .orWhere(`property.postal ILIKE '%${search}%'`)
      .orWhere(`property.description ILIKE '%${search}%'`)
      .groupBy('property.id')
      .getRawMany();
  }

  getOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['user', 'reviews', 'reviews.user', 'amenities', 'bookings'],
      select: {
        reviews: {
          id: true,
          rating: true,
          user: { nick: true },
          submitted: true,
          content: true,
        },
        bookings: {
          id: true,
          check_in: true,
          check_out: true,
        },
        amenities: {
          id: true,
          name: true,
        },
        user: {
          nick: true,
        },
      },
    });
  }
}
