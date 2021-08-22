import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import RolesEnum from 'src/enums/roles.enum';

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ unique: true })
  email: string;

  @Field(() => String)
  @Prop()
  firstName: string;

  @Field(() => String)
  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Field(() => GraphQLISODateTime)
  @Prop({ type: Date, default: new Date() })
  createdAt: Date;

  @Prop({ default: [RolesEnum.USER] })
  roles: [RolesEnum];

  @Prop({ default: null })
  refreshToken?: string;

  @Prop({ type: Date, default: null })
  refreshTokenExpire?: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
