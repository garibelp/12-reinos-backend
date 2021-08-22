import { Schema as MongooseSchema } from 'mongoose';
import { IsMongoId } from 'class-validator';

// Only internally used during login/refresh
export class UpdateUserJwtInput {
  @IsMongoId()
  _id: MongooseSchema.Types.ObjectId;

  refreshToken?: string;

  refreshTokenExpire?: Date;
}
