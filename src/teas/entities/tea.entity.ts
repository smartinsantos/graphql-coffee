import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'Tea model', implements: () => Drink })
export class Tea implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Unique Identifier' })
  id: number;

  @Column()
  name: string;
}
