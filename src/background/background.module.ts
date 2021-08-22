import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BackgroundService } from './background.service';
import { BackgroundResolver } from './background.resolver';
import { Background, BackgroundSchema } from './entities/background.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Background.name, schema: BackgroundSchema },
    ]),
  ],
  providers: [BackgroundResolver, BackgroundService],
})
export class BackgroundModule {}
