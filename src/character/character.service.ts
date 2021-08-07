import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import RolesEnum from 'src/enums/role.enum';
import { User } from 'src/user/entities/user.entity';
import { CreateCharacterInput } from './dto/create-character.input';
import { ListCharacterInput } from './dto/list-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
import { Character, CharacterDocument } from './entities/character.entity';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<CharacterDocument>,
  ) {}

  async validateUser(charId: MongooseSchema.Types.ObjectId, user: User) {
    if (user.permissions.includes(RolesEnum.ADMIN)) {
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
    if (user.permissions.includes(RolesEnum.ADMIN)) {
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
