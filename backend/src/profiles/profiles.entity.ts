import { Users } from '../users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Profiles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  dob: string;

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
  phone: string;

  @OneToOne(() => Users, (user) => user.userProfile)
  @JoinColumn({ name: 'id' })
  user: Users;
}
