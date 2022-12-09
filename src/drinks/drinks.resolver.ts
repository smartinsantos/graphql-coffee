import { Query, Resolver } from '@nestjs/graphql';
import { CoffeesService } from 'src/coffees/coffees.service';
import { DrinksResultUnion } from 'src/common/unions/drinks-result.union';
import { TeasService } from 'src/teas/teas.service';

@Resolver()
export class DrinksResolver {
  constructor(
    private readonly coffeesService: CoffeesService,
    private readonly teasService: TeasService,
  ) {}

  @Query(() => [DrinksResultUnion], { name: 'drinks' })
  async findAll(): Promise<typeof DrinksResultUnion[]> {
    const coffees = await this.coffeesService.findAll();
    const teas = await this.teasService.findAll();
    return [...coffees, ...teas];
  }
}
