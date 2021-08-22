import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class BonusAttributeInput {
  @Field(() => Int)
  TEN: number;

  @Field(() => Int)
  CEL: number;

  @Field(() => Int)
  INT: number;

  @Field(() => Int)
  AST: number;
}
