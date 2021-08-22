import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { BonusAttribute } from 'src/shared/entities/bonus-attribute';
import { Skill } from 'src/shared/entities/skill';

@ObjectType()
@Schema()
export class Graduation {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ unique: true })
  name: string;

  @Field(() => Int)
  @Prop()
  life: number;

  @Field(() => Int)
  @Prop()
  mana: number;

  @Field(() => Int)
  @Prop()
  armor: number;

  @Field(() => String)
  @Prop()
  hitDice: string;

  @Field(() => BonusAttribute)
  @Prop()
  bonusAttr: BonusAttribute;

  @Field(() => [Skill])
  @Prop()
  skills: [Skill];
}

export type GraduationDocument = Graduation & Document;
export const GraduationSchema = SchemaFactory.createForClass(Graduation);
