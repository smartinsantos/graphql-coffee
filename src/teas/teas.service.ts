import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInputError } from 'apollo-server-express';
import { Repository } from 'typeorm';
import { CreateTeaInput } from './dto/create-tea.input';
import { UpdateTeaInput } from './dto/update-tea.input';
import { Tea } from './entities/tea.entity';

@Injectable()
export class TeasService {
  constructor(
    @InjectRepository(Tea)
    private readonly teaRepository: Repository<Tea>,
  ) {}

  async findAll() {
    return this.teaRepository.find();
  }

  async findOne(id: number) {
    const tea = await this.teaRepository.findOne({ where: { id } });

    if (!tea) {
      throw new UserInputError(`Tea #${id} does not exist.`);
    }

    return tea;
  }

  async create(createTeaInput: CreateTeaInput) {
    const tea = this.teaRepository.create(createTeaInput);

    return this.teaRepository.save(tea);
  }

  async update(id: number, updateTeaInput: UpdateTeaInput) {
    const tea = await this.teaRepository.preload({ id, ...updateTeaInput });

    if (!tea) {
      throw new UserInputError(`Tea #${id} does not exist`);
    }

    return this.teaRepository.save(tea);
  }

  async remove(id: number) {
    const tea = await this.findOne(id);

    return this.teaRepository.remove(tea);
  }
}
