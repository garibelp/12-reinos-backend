import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Skill {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Int)
  @Prop()
  level: number;

  @Field(() => Int)
  @Prop()
  cost: number;

  @Field(() => String)
  @Prop()
  description: string;

  @Field(() => String, { nullable: true })
  @Prop()
  conjuration?: string;

  @Field(() => Int, { nullable: true })
  @Prop()
  distance?: number;
}
