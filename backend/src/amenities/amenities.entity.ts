import { Properties } from '../properties/properties.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Amenities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Properties, (property) => property.amenities)
  @JoinTable({
    name: 'properties_amenities',
    joinColumn: { name: 'amenityId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'propertyId', referencedColumnName: 'id' },
  })
  properties: Properties[];
}
