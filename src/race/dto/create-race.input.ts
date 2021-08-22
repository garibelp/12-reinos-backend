import { InputType, Int, Field } from '@nestjs/graphql';
import { ArrayNotEmpty, IsNotEmpty, MinLength } from 'class-validator';
import LanguagesEnum from 'src/enums/languages.enum';
import SizeEnum from 'src/enums/sizes.enum';
import { RaceCharacteristic } from '../entities/race.entity';

@InputType()
class RaceCharacteristicInput {
  @Field(() => String)
  @MinLength(4)
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsNotEmpty()
  description: string;
}

@InputType()
export class CreateRaceInput {
  @Field(() => String)
  @MinLength(4)
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsNotEmpty()
  age: string;

  @Field(() => Int)
  movement: number;

  @Field(() => SizeEnum)
  size: SizeEnum;

  @Field(() => [LanguagesEnum])
  @ArrayNotEmpty()
  languages: [LanguagesEnum];

  @Field(() => RaceCharacteristicInput)
  pro: RaceCharacteristic;

  @Field(() => RaceCharacteristicInput)
  con: RaceCharacteristic;
}
