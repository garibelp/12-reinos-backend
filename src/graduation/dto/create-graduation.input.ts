import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, Matches } from 'class-validator';
import { BonusAttributeInput } from 'src/shared/dto/bonus-attribute.input';
import { SkillInput } from 'src/shared/dto/skill.input';
import { BonusAttribute } from 'src/shared/entities/bonus-attribute';
import { Skill } from 'src/shared/entities/skill';

@InputType()
export class CreateGraduationInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => Int)
  life: number;

  @Field(() => Int)
  mana: number;

  @Field(() => Int)
  armor: number;

  @Field(() => String)
  @Matches('^d[1-9][0-9]?$')
  hitDice: string;

  @Field(() => BonusAttributeInput)
  bonusAttr: BonusAttribute;

  @Field(() => [SkillInput])
  skills: [Skill];
}
