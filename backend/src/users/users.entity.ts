import { Profiles } from '../profiles/profiles.entity';
import { Properties } from '../properties/properties.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reviews } from '../reviews/reviews.entity';
import { Bookings } from '../bookings/bookings.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  nick: string;

  @OneToMany(() => Properties, (property) => property.user)
  properties: Properties[];

  @OneToOne(() => Profiles, (userProfile) => userProfile.user)
  userProfile: Profiles;

  @OneToMany(() => Reviews, (review) => review.user)
  reviews: Reviews[];

  @OneToMany(() => Bookings, (booking) => booking.user)
  bookings: Users[];
}
