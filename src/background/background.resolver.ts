import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { BackgroundService } from './background.service';
import { Background } from './entities/background.entity';
import { CreateBackgroundInput } from './dto/create-background.input';
import { UpdateBackgroundInput } from './dto/update-background.input';

@Resolver(() => Background)
export class BackgroundResolver {
  constructor(private readonly backgroundService: BackgroundService) {}

  @Mutation(() => Background)
  createBackground(@Args('payload') payload: CreateBackgroundInput) {
    return this.backgroundService.create(payload);
  }

  @Query(() => [Background], { name: 'background' })
  findAll() {
    return this.backgroundService.findAll();
  }

  @Query(() => Background, { name: 'background' })
  findOne(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.backgroundService.findOne(_id);
  }

  @Mutation(() => Background)
  updateBackground(@Args('payload') payload: UpdateBackgroundInput) {
    return this.backgroundService.update(payload);
  }

  @Mutation(() => Background)
  removeBackground(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.backgroundService.remove(_id);
  }
}
