import { Expose, Type } from 'class-transformer';

class PropertyDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  city: string;

  @Expose()
  price: number;

  @Expose()
  imgs: string[];
}
class BookingsDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => PropertyDto)
  property: PropertyDto;

  @Expose()
  check_in: string;

  @Expose()
  check_out: string;

  @Expose()
  total_price: number;

  @Expose()
  status: number;
}
class UserProfileDto {
  @Expose()
  nick: string;

  @Expose()
  email: string;
}

export class ProfileInfoDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  surname: string;

  @Expose()
  dob: string;

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
  phone: string;

  @Expose()
  @Type(() => UserProfileDto)
  user: UserProfileDto;
}
