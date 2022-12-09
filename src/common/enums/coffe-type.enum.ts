import { registerEnumType } from '@nestjs/graphql';

export enum CoffeType {
  ARABICA = 'Arabica',
  ROBUSTA = 'Robusta',
}

registerEnumType(CoffeType, { name: 'CoffeType' });
