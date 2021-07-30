import { Field, InputType } from '@nestjs/graphql';
import { Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @MinLength(6)
  @MaxLength(20)
  email: string;

  @Field(() => String)
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
