import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateAptitudeInput {
  @Field(() => String)
  @MinLength(4)
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsNotEmpty()
  description: string;
}
