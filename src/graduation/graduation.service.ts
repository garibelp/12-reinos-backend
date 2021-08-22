import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreateGraduationInput } from './dto/create-graduation.input';
import { UpdateGraduationInput } from './dto/update-graduation.input';
import { Graduation, GraduationDocument } from './entities/graduation.entity';

@Injectable()
export class GraduationService {
  constructor(
    @InjectModel(Graduation.name)
    private readonly graduationModel: Model<GraduationDocument>,
  ) {}

  create(payload: CreateGraduationInput) {
    return new this.graduationModel(payload).save();
  }

  findAll() {
    return this.graduationModel.find().exec();
  }

  findOne(_id: MongooseSchema.Types.ObjectId) {
    return this.graduationModel.findById(_id).exec();
  }

  update(payload: UpdateGraduationInput) {
    const { _id } = payload;
    return this.graduationModel
      .findByIdAndUpdate(_id, payload, { new: true })
      .exec();
  }

  remove(_id: MongooseSchema.Types.ObjectId) {
    return this.graduationModel.findByIdAndDelete(_id).exec();
  }
}
