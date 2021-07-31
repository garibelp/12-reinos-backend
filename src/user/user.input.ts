import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(2)
  @IsNotEmpty()
  firstName: string;

  @Field(() => String)
  @MinLength(2)
  @IsNotEmpty()
  lastName: string;

  @Field(() => String)
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  @IsMongoId()
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  @MinLength(2)
  @IsNotEmpty()
  firstName?: string;

  @Field(() => String, { nullable: true })
  @MinLength(2)
  @IsNotEmpty()
  lastName?: string;

  @Field(() => String, { nullable: true })
  lastToken?: string;

  @Field(() => String, { nullable: true })
  lastLogin?: Date;
}
