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
    return `This action returns all background`;
  }

  findOne(_id: MongooseSchema.Types.ObjectId) {
    return `This action returns a #${_id} background`;
  }

  update(updateBackgroundInput: UpdateBackgroundInput) {
    const { _id } = updateBackgroundInput;
    return `This action updates a #${_id} background`;
  }

  remove(_id: MongooseSchema.Types.ObjectId) {
    return `This action removes a #${_id} background`;
  }
}
