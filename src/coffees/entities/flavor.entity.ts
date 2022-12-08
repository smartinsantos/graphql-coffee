import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
@ObjectType({ description: 'Flavor model' })
export class Flavor {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Unique identifier' })
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
