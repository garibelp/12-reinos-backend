import { IsNotEmpty } from 'class-validator';

export class Character {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  job: number;
}
