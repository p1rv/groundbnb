import { Properties } from '../properties/properties.entity';
import { Users } from '../users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reviews {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.reviews)
  user: Users;

  @ManyToOne(() => Properties, (property) => property.reviews)
  property: Properties;

  @Column()
  rating: number;

  @Column()
  content: string;

  @Column()
  submitted: string;
}
