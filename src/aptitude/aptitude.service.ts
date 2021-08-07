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
    return `This action returns all aptitude`;
  }

  findOne(id: MongooseSchema.Types.ObjectId) {
    return `This action returns a #${id} aptitude`;
  }

  update(updateAptitudeInput: UpdateAptitudeInput) {
    const { _id } = updateAptitudeInput;
    return `This action updates a #${_id} aptitude`;
  }

  remove(_id: MongooseSchema.Types.ObjectId) {
    return `This action removes a #${_id} aptitude`;
  }
}
