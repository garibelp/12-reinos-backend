import { Module } from '@nestjs/common';
import { RaceService } from './race.service';
import { RaceResolver } from './race.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Race, RaceSchema } from './entities/race.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Race.name, schema: RaceSchema }]),
  ],
  providers: [RaceResolver, RaceService],
})
export class RaceModule {}
