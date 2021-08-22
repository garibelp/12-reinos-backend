import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

import { BonusAttributeInput } from 'src/shared/dto/bonus-attribute.input';
import { BonusAttribute } from 'src/shared/entities/bonus-attribute';

@InputType()
export class CreateBackgroundInput {
  @Field(() => String)
  @MinLength(4)
  @IsNotEmpty()
  name: string;

  @Field(() => BonusAttributeInput)
  bonusAttr: BonusAttribute;

  @Field(() => String)
  @IsNotEmpty()
  bond: string;
}
