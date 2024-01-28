import { IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  dob: string;

  @IsString()
  postal: string;

  @IsString()
  city: string;

  @IsString()
  street: string;

  @IsString()
  building_no: string;

  @IsString()
  flat_no: string;

  @IsString()
  phone: string;
}
