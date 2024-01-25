import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { Properties } from './properties/properties.entity';
import { PropertiesModule } from './properties/properties.module';
import { Amenities } from './amenities/amenities.entity';
import { AmenitiesModule } from './amenities/amenities.module';
import { Profiles } from './profiles/profiles.entity';
import { ProfilesModule } from './profiles/profiles.module';
import { ReviewsModule } from './reviews/reviews.module';
import { Reviews } from './reviews/reviews.entity';
import { Bookings } from './bookings/bookings.entity';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Users, Properties, Amenities, Profiles, Reviews, Bookings],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    UsersModule,
    PropertiesModule,
    AmenitiesModule,
    ProfilesModule,
    ReviewsModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
