import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import LanguagesEnum from 'src/enums/languages.enum';
import SizeEnum from 'src/enums/sizes.enum';

@ObjectType()
export class RaceCharacteristic {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  description: string;
}

@ObjectType()
@Schema()
export class Race {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ unique: true })
  name: string;

  @Field(() => String)
  @Prop()
  age: string;

  @Field(() => Int)
  @Prop()
  movement: number;

  @Field(() => SizeEnum)
  @Prop()
  size: SizeEnum;

  @Field(() => [LanguagesEnum])
  @Prop()
  languages: [LanguagesEnum];

  @Field(() => RaceCharacteristic)
  @Prop()
  pro: RaceCharacteristic;

  @Field(() => RaceCharacteristic)
  @Prop()
  con: RaceCharacteristic;
}

export type RaceDocument = Race & Document;
export const RaceSchema = SchemaFactory.createForClass(Race);
