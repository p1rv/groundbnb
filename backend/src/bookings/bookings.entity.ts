import { Properties } from '../properties/properties.entity';
import { Users } from '../users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bookings {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.bookings)
  user: Users;

  @ManyToOne(() => Properties, (property) => property.bookings)
  property: Properties;

  @Column()
  check_in: string;

  @Column()
  check_out: string;

  @Column()
  total_price: number;

  @Column()
  status: number;
}
