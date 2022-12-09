import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { TeasModule } from 'src/teas/teas.module';
import { DrinksResolver } from './drinks.resolver';

@Module({
  imports: [CoffeesModule, TeasModule],
  providers: [DrinksResolver],
})
export class DrinksModule {}
