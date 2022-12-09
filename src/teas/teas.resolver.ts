import { ParseIntPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTeaInput } from './dto/create-tea.input';
import { UpdateTeaInput } from './dto/update-tea.input';
import { Tea } from './entities/tea.entity';
import { TeasService } from './teas.service';

@Resolver()
export class TeasResolver {
  constructor(private readonly teaService: TeasService) {}

  @Query(() => [Tea], { name: 'teas' })
  async findAll() {
    return this.teaService.findAll();
  }

  @Query(() => Tea, { name: 'tea' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.teaService.findOne(id);
  }

  @Mutation(() => Tea, { name: 'createTea' })
  async create(@Args('createTeaInput') createTeaInput: CreateTeaInput) {
    return this.teaService.create(createTeaInput);
  }

  @Mutation(() => Tea, { name: 'updateTea' })
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateTeaInput') updateTeaInput: UpdateTeaInput,
  ) {
    return this.teaService.update(id, updateTeaInput);
  }

  @Mutation(() => Tea, { name: 'removeTea' })
  async remove(@Args('id', ParseIntPipe) id: number) {
    return this.teaService.remove(id);
  }
}
