import { Field, InputType, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class ListCharacterInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  background?: string;

  @Field(() => String, { nullable: true })
  race?: string;

  @Field(() => String, { nullable: true })
  job?: string;

  @Field(() => String, { nullable: true })
  subclass?: string;

  @Field(() => Int, { nullable: true })
  level?: number;
}
