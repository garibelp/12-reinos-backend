import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AptitudeService } from './aptitude.service';
import { AptitudeResolver } from './aptitude.resolver';
import { Aptitude, AptitudeSchema } from './entities/aptitude.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Aptitude.name, schema: AptitudeSchema },
    ]),
  ],
  providers: [AptitudeResolver, AptitudeService],
})
export class AptitudeModule {}
