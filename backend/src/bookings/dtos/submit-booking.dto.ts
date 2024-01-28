import { IsNumber, IsString } from 'class-validator';

export class SubmitBookingDto {
  @IsNumber()
  propertyId: number;

  @IsNumber()
  total: number;

  @IsString()
  checkIn: string;

  @IsString()
  checkOut: string;
}
