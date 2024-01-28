import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { JwtService } from '@nestjs/jwt';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(nick: string, email: string, pass: string) {
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('Email already in use');
    }

    const salt = randomBytes(16).toString('hex');
    const hash = (await scrypt(pass, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');

    const { id } = await this.usersService.create(nick, email, result);

    const payload = { sub: id, username: nick };

    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      }),
    };
  }

  async signin(email: string, pass: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('User with given email not found');
    }

    const { password, id, nick } = user;

    const [salt, hash] = password.split('.');
    const checkHash = (await scrypt(pass, salt, 32)) as Buffer;

    if (hash !== checkHash.toString('hex')) {
      throw new BadRequestException('Incorrect password');
    }

    const payload = { sub: id, username: nick };

    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      }),
    };
  }

  async refresh(oldToken: string) {
    try {
      const { sub, username } = this.jwtService.verify(oldToken);

      return {
        access_token: await this.jwtService.signAsync({ sub, username }),
        refresh_token: await this.jwtService.signAsync(
          { sub, username },
          {
            expiresIn: '7d',
          },
        ),
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
