import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { BackgroundService } from './background.service';
import { Background } from './entities/background.entity';
import { CreateBackgroundInput } from './dto/create-background.input';
import { UpdateBackgroundInput } from './dto/update-background.input';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import RolesEnum from 'src/enums/role.enum';

@Resolver(() => Background)
@UseGuards(GqlAuthGuard, RolesGuard)
export class BackgroundResolver {
  constructor(private readonly backgroundService: BackgroundService) {}

  @Mutation(() => Background)
  @Roles(RolesEnum.ADMIN)
  createBackground(@Args('payload') payload: CreateBackgroundInput) {
    return this.backgroundService.create(payload);
  }

  @Query(() => [Background], { name: 'backgrounds' })
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
  @Roles(RolesEnum.ADMIN)
  updateBackground(@Args('payload') payload: UpdateBackgroundInput) {
    return this.backgroundService.update(payload);
  }

  @Mutation(() => Background)
  @Roles(RolesEnum.ADMIN)
  removeBackground(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.backgroundService.remove(_id);
  }
}
