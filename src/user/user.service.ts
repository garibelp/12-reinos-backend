import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from './model/user.model';
import {
  CreateUserInput,
  UpdateUserInput,
  UpdateUserJwtInput,
} from './user.input';
import PermissionsEnum from 'src/enums/permissions.enum';

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

  async update(payload: UpdateUserInput | UpdateUserJwtInput, user: User) {
    if (
      !user.permissions.includes(PermissionsEnum.ADMIN) ||
      user._id !== payload._id
    ) {
      throw new UnauthorizedException();
    }
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
