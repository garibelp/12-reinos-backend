import { Schema as MongooseSchema } from 'mongoose';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

import { CreateAptitudeInput } from './create-aptitude.input';

@InputType()
export class UpdateAptitudeInput extends PartialType(CreateAptitudeInput) {
  @Field(() => String)
  @IsMongoId()
  _id: MongooseSchema.Types.ObjectId;
}
