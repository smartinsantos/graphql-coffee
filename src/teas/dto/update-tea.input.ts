import { InputType, PartialType } from '@nestjs/graphql';
import { CreateTeaInput } from './create-tea.input';

@InputType()
export class UpdateTeaInput extends PartialType(CreateTeaInput) {}
