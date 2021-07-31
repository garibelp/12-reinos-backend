import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import PermissionsEnum from 'src/enums/permissions.enum';

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Field(() => GraphQLISODateTime)
  @Prop({ type: Date, default: new Date() })
  createdAt: Date;

  @Prop({ default: [PermissionsEnum.USER] })
  permissions: [string];

  @Prop({ default: null })
  lastToken?: string;

  @Prop({ type: Date, default: null })
  lastLogin?: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
