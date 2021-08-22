import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreateAptitudeInput } from './dto/create-aptitude.input';
import { UpdateAptitudeInput } from './dto/update-aptitude.input';
import { Aptitude, AptitudeDocument } from './entities/aptitude.entity';

@Injectable()
export class AptitudeService {
  constructor(
    @InjectModel(Aptitude.name)
    private readonly aptitudeModel: Model<AptitudeDocument>,
  ) {}

  create(payload: CreateAptitudeInput) {
    return new this.aptitudeModel(payload).save();
  }

  findAll() {
    return this.aptitudeModel.find().exec();
  }

  findOne(_id: MongooseSchema.Types.ObjectId) {
    return this.aptitudeModel.findById(_id).exec();
  }

  update(payload: UpdateAptitudeInput) {
    const { _id } = payload;
    return this.aptitudeModel
      .findByIdAndUpdate(_id, payload, { new: true })
      .exec();
  }

  remove(_id: MongooseSchema.Types.ObjectId) {
    return this.aptitudeModel.findByIdAndDelete(_id).exec();
  }
}
