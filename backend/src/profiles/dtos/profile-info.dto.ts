import { Expose, Type } from 'class-transformer';
import { UserDto } from '../../users/dtos/user.dto';

export class ProfileInfoDto {
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
  @Type(() => UserDto)
  user: UserDto;
}
