import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class BonusAttribute {
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Prop({ default: 0 })
  TEN?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Prop({ default: 0 })
  CEL?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Prop({ default: 0 })
  INT?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Prop({ default: 0 })
  AST?: number;
}
