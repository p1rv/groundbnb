import { Expose, Type } from 'class-transformer';

class AmenityDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
}

export class UsersPropertyDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  postal: string;

  @Expose()
  city: string;

  @Expose()
  street: string;

  @Expose()
  building_no: string;

  @Expose()
  flat_no: string;

  @Expose()
  rooms: number;

  @Expose()
  area: number;

  @Expose()
  kitchen: boolean;

  @Expose()
  price: number;

  @Expose()
  imgs: string[];

  @Expose()
  @Type(() => AmenityDto)
  amenities: AmenityDto[];
}
