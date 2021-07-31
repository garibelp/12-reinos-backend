import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import PermissionsEnum from 'src/enums/permissions.enum';
import { User } from 'src/user/model/user.model';

import {
  CreateCharacterInput,
  ListCharacterInput,
  UpdateCharacterInput,
} from './character.input';
import { Character, CharacterDocument } from './model/character.model';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<CharacterDocument>,
  ) {}

  async validateUser(charId: MongooseSchema.Types.ObjectId, user: User) {
    if (user.permissions.includes(PermissionsEnum.ADMIN)) {
      return;
    }

    const char = await this.characterModel
      .findOne({
        _id: charId,
        user: user._id,
      })
      .exec();

    if (!char) {
      throw new UnauthorizedException();
    }
  }

  create(payload: CreateCharacterInput, user: User) {
    return new this.characterModel({
      ...payload,
      user: user._id,
    }).save();
  }

  async getById(_id: MongooseSchema.Types.ObjectId, user: User) {
    // Check if user updating collection is the owner or admin
    await this.validateUser(_id, user);
    return this.characterModel.findById(_id).exec();
  }

  list(filters: ListCharacterInput, user: User) {
    // Return all characters if is admin
    if (user.permissions.includes(PermissionsEnum.ADMIN)) {
      return this.characterModel.find({ ...filters }).exec();
    }
    // Return only characters from user
    return this.characterModel
      .find({
        ...filters,
        user: user._id,
      })
      .exec();
  }

  async update(payload: UpdateCharacterInput, user: User) {
    // Check if user updating collection is the owner or admin
    await this.validateUser(payload._id, user);

    return this.characterModel
      .findByIdAndUpdate(payload._id, payload, {
        new: true,
      })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId, user: User) {
    // Check if user updating collection is the owner or admin
    await this.validateUser(_id, user);
    return this.characterModel.findByIdAndDelete(_id).exec();
  }
}
