import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Coffee model' })
export class Coffee {
  @Field(() => ID, { description: 'Unique identifier' }) // override inferred type by plugin and adding a description comment
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
