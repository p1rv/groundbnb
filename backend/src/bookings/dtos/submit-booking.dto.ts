import { IsNumber } from 'class-validator';

export class SubmitBookingDto {
  @IsNumber()
  propertyId: number;

  @IsNumber()
  total: number;

  @IsNumber()
  checkIn: number;

  @IsNumber()
  checkOut: number;
}
