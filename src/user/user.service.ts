import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from './model/user.model';
import { CreateUserInput, UpdateUserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(payload: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    return new this.userModel({
      ...payload,
      password: hashedPassword,
    }).save();
  }

  async update(payload: UpdateUserInput) {
    return this.userModel
      .findByIdAndUpdate(payload._id, payload, {
        new: true,
      })
      .exec();
  }

  getByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
