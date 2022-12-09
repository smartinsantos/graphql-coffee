import { InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType({ description: 'Create tea input object type' })
export class CreateTeaInput {
  @MinLength(3)
  name: string;
}
