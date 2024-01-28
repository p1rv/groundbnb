import { IsEmail, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class SignUpDto {
  @IsString()
  nick: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
