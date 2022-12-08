import { ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';

@ObjectType({ description: 'Tea model', implements: () => Drink })
export class Tea implements Drink {
  name: string;
}
