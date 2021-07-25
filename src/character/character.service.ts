import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

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

  create(payload: CreateCharacterInput) {
    return new this.characterModel(payload).save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.characterModel.findById(_id).exec();
  }

  list(filters: ListCharacterInput) {
    return this.characterModel.find({ ...filters }).exec();
  }

  update(payload: UpdateCharacterInput) {
    return this.characterModel
      .findByIdAndUpdate(payload._id, payload, {
        new: true,
      })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.characterModel.findByIdAndDelete(_id).exec();
  }
}
