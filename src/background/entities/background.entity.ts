import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { BonusAttribute } from 'src/shared/entities/bonus-attribute';

@ObjectType()
@Schema()
export class Background {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ unique: true })
  name: string;

  @Field(() => BonusAttribute)
  @Prop()
  bonusAttr: BonusAttribute;

  @Field(() => String)
  @Prop()
  bond: string;
}

export type BackgroundDocument = Background & Document;
export const BackgroundSchema = SchemaFactory.createForClass(Background);
