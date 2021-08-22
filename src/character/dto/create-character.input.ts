import { Field, InputType, Int } from '@nestjs/graphql';
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
