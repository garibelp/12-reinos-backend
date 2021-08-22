import { Schema as MongooseSchema } from 'mongoose';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

import { CreateGraduationInput } from './create-graduation.input';

@InputType()
export class UpdateGraduationInput extends PartialType(CreateGraduationInput) {
  @Field(() => String)
  @IsMongoId()
  _id: MongooseSchema.Types.ObjectId;
}
