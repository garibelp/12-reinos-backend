import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from './model/user.model';
import { CreateUserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  create(payload: CreateUserInput) {
    return new this.userModel({
      ...payload,
      password: bcrypt.hashSync(payload.password, 10),
      createdAt: new Date(),
    }).save();
  }
}
