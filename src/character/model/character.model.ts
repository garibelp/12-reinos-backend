import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import AttributeEnum from 'src/enums/attributes.enum';

@ObjectType()
@Schema()
export class Character {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  background: string;

  @Field(() => String)
  @Prop()
  race: string;

  @Field(() => String)
  @Prop()
  job: string;

  @Field(() => String, { nullable: true })
  @Prop()
  subclass?: string;

  @Field(() => Int)
  @Prop()
  level: number;

  @Field(() => Int)
  @Prop()
  currentLife: number;

  @Field(() => Int)
  @Prop()
  totalLife: number;

  @Field(() => Int)
  @Prop()
  currentMana: number;

  @Field(() => Int)
  @Prop()
  totalMana: number;

  @Field(() => Int)
  @Prop()
  currentArmor: number;

  @Field(() => Int)
  @Prop()
  totalArmor: number;

  @Field(() => Boolean, { nullable: true })
  @Prop()
  defective?: boolean;

  @Field(() => String, { nullable: true })
  @Prop()
  enhancedAttribute?: AttributeEnum;

  @Field(() => [Int])
  @Prop()
  [AttributeEnum.TEN]: number[];

  @Field(() => [Int])
  @Prop()
  [AttributeEnum.AST]: number[];

  @Field(() => [Int])
  @Prop()
  [AttributeEnum.CEL]: number[];

  @Field(() => [Int])
  @Prop()
  [AttributeEnum.INT]: number[];

  @Field(() => [String])
  @Prop()
  aptitudeList: [string];
}

export type CharacterDocument = Character & Document;
export const CharacterSchema = SchemaFactory.createForClass(Character);
