import { Field, InputType, Int } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import AttributeEnum from 'src/enums/attributes.enum';

@InputType()
export class CreateCharacterInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  background: string;

  @Field(() => String)
  race: string;

  @Field(() => String)
  job: string;

  @Field(() => String, { nullable: true })
  subclass?: string;

  @Field(() => Int)
  level: number;

  @Field(() => Int)
  currentLife: number;

  @Field(() => Int)
  totalLife: number;

  @Field(() => Int)
  currentMana: number;

  @Field(() => Int)
  totalMana: number;

  @Field(() => Int)
  currentArmor: number;

  @Field(() => Int)
  totalArmor: number;

  @Field(() => Boolean, { nullable: true })
  defective?: boolean;

  @Field(() => String, { nullable: true })
  enhancedAttribute?: AttributeEnum;

  @Field(() => [Int])
  [AttributeEnum.TEN]: number[];

  @Field(() => [Int])
  [AttributeEnum.AST]: number[];

  @Field(() => [Int])
  [AttributeEnum.CEL]: number[];

  @Field(() => [Int])
  [AttributeEnum.INT]: number[];

  @Field(() => [String])
  aptitudeList: [string];
}

@InputType()
export class ListCharacterInput {
  @Field(() => String, { nullable: true })
  @IsMongoId()
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

@InputType()
export class UpdateCharacterInput {
  @Field(() => String)
  @IsMongoId()
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  subclass?: string;

  @Field(() => Int, { nullable: true })
  level?: number;

  @Field(() => Int, { nullable: true })
  currentLife?: number;

  @Field(() => Int, { nullable: true })
  totalLife?: number;

  @Field(() => Int, { nullable: true })
  currentMana?: number;

  @Field(() => Int, { nullable: true })
  totalMana?: number;

  @Field(() => Int, { nullable: true })
  currentArmor?: number;

  @Field(() => Int, { nullable: true })
  totalArmor?: number;

  @Field(() => Boolean, { nullable: true })
  defective?: boolean;

  @Field(() => String, { nullable: true })
  enhancedAttribute?: AttributeEnum;

  @Field(() => [String], { nullable: true })
  aptitudeList?: [string];

  @Field(() => [Int], { nullable: true })
  [AttributeEnum.TEN]?: number[];

  @Field(() => [Int], { nullable: true })
  [AttributeEnum.AST]?: number[];

  @Field(() => [Int], { nullable: true })
  [AttributeEnum.CEL]?: number[];

  @Field(() => [Int], { nullable: true })
  [AttributeEnum.INT]?: number[];
}
