import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreateBackgroundInput } from './dto/create-background.input';
import { UpdateBackgroundInput } from './dto/update-background.input';
import { Background, BackgroundDocument } from './entities/background.entity';

@Injectable()
export class BackgroundService {
  constructor(
    @InjectModel(Background.name)
    private readonly backgroundModel: Model<BackgroundDocument>,
  ) {}

  create(payload: CreateBackgroundInput) {
    return new this.backgroundModel(payload).save();
  }

  findAll() {
    return this.backgroundModel.find().exec();
  }

  findOne(_id: MongooseSchema.Types.ObjectId) {
    return this.backgroundModel.findById(_id).exec();
  }

  update(payload: UpdateBackgroundInput) {
    const { _id } = payload;
    return this.backgroundModel
      .findByIdAndUpdate(_id, payload, { new: true })
      .exec();
  }

  remove(_id: MongooseSchema.Types.ObjectId) {
    return this.backgroundModel.findByIdAndDelete(_id).exec();
  }
}
