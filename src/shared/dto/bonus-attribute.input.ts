import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class BonusAttributeInput {
  @Field(() => Int, { nullable: true })
  TEN?: number;

  @Field(() => Int, { nullable: true })
  CEL?: number;

  @Field(() => Int, { nullable: true })
  INT?: number;

  @Field(() => Int, { nullable: true })
  AST?: number;
}
