import { Query, Resolver } from '@nestjs/graphql';
import { CoffeesService } from 'src/coffees/coffees.service';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { TeasService } from 'src/teas/teas.service';

@Resolver()
export class DrinksResolver {
  constructor(
    private readonly coffeesService: CoffeesService,
    private readonly teasService: TeasService,
  ) {}

  @Query(() => [Drink], { name: 'drinks' })
  async findAll(): Promise<Drink[]> {
    const coffees = await this.coffeesService.findAll();
    const teas = await this.teasService.findAll();
    return [...coffees, ...teas];
  }
}
