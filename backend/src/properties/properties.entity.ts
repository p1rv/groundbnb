import { Reviews } from '../reviews/reviews.entity';
import { Amenities } from '../amenities/amenities.entity';
import { Users } from '../users/users.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bookings } from '../bookings/bookings.entity';

@Entity()
export class Properties {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.properties)
  user: Users;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  postal: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  building_no: string;

  @Column()
  flat_no: string;

  @Column()
  rooms: number;

  @Column('float')
  area: number;

  @Column()
  kitchen: boolean;

  @Column()
  price: number;

  @Column('simple-array', { nullable: false })
  imgs: string[];

  @ManyToMany(() => Amenities, (amenity) => amenity.properties)
  @JoinTable({
    name: 'properties_amenities',
    joinColumn: { name: 'propertyId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'amenityId', referencedColumnName: 'id' },
  })
  amenities: Amenities[];

  @OneToMany(() => Reviews, (review) => review.property)
  reviews: Reviews[];

  @OneToMany(() => Bookings, (booking) => booking.property)
  bookings: Bookings[];
}
