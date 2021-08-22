import { Schema as MongooseSchema } from 'mongoose';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

import { CreateBackgroundInput } from './create-background.input';

@InputType()
export class UpdateBackgroundInput extends PartialType(CreateBackgroundInput) {
  @Field(() => String)
  @IsMongoId()
  _id: MongooseSchema.Types.ObjectId;
}
