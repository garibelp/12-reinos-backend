import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class BonusAttribute {
  @Field(() => Int)
  @Prop()
  TEN: number;

  @Field(() => Int)
  @Prop()
  CEL: number;

  @Field(() => Int)
  @Prop()
  INT: number;

  @Field(() => Int)
  @Prop()
  AST: number;
}
