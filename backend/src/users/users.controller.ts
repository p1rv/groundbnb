import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { SignInDto, SignUpDto } from '../auth/dtos/auth.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() user: SignInDto) {
    return this.authService.signin(user.email, user.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() user: SignUpDto) {
    return this.authService.signup(user.nick, user.email, user.password);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  refresh(@Body() { refreshToken }: { refreshToken: string }) {
    return this.authService.refresh(refreshToken);
  }

  @UseGuards(AuthGuard)
  @Get('whoami')
  whoAmI(@Request() req) {
    return req.user;
  }
}
