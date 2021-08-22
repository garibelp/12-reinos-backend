import { Schema as MongooseSchema } from 'mongoose';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

import { CreateRaceInput } from './create-race.input';

@InputType()
export class UpdateRaceInput extends PartialType(CreateRaceInput) {
  @Field(() => String)
  @IsMongoId()
  _id: MongooseSchema.Types.ObjectId;
}
