import { Module } from '@nestjs/common';
import { GraduationService } from './graduation.service';
import { GraduationResolver } from './graduation.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Graduation, GraduationSchema } from './entities/graduation.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Graduation.name, schema: GraduationSchema },
    ]),
  ],
  providers: [GraduationResolver, GraduationService],
})
export class GraduationModule {}
