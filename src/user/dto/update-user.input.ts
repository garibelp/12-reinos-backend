import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { IsMongoId, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  @IsMongoId()
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  @MinLength(2)
  @IsNotEmpty()
  firstName?: string;

  @Field(() => String, { nullable: true })
  @MinLength(2)
  @IsNotEmpty()
  lastName?: string;
}
