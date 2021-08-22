import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class SkillInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  level: number;

  @Field(() => Int)
  cost: number;

  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  conjuration?: string;

  @Field(() => Int, { nullable: true })
  distance?: number;
}
