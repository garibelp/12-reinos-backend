import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreateRaceInput } from './dto/create-race.input';
import { UpdateRaceInput } from './dto/update-race.input';
import { Race, RaceDocument } from './entities/race.entity';

@Injectable()
export class RaceService {
  constructor(
    @InjectModel(Race.name)
    private readonly raceModel: Model<RaceDocument>,
  ) {}

  create(payload: CreateRaceInput) {
    return new this.raceModel(payload).save();
  }

  findAll() {
    return this.raceModel.find().exec();
  }

  findOne(_id: MongooseSchema.Types.ObjectId) {
    return this.raceModel.findById(_id).exec();
  }

  update(payload: UpdateRaceInput) {
    const { _id } = payload;
    return this.raceModel.findByIdAndUpdate(_id, payload, { new: true }).exec();
  }

  remove(_id: MongooseSchema.Types.ObjectId) {
    return this.raceModel.findByIdAndDelete(_id).exec();
  }
}
