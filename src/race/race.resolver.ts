import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { RaceService } from './race.service';
import { Race } from './entities/race.entity';
import { CreateRaceInput } from './dto/create-race.input';
import { UpdateRaceInput } from './dto/update-race.input';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import RolesEnum from 'src/enums/roles.enum';

@Resolver(() => Race)
@UseGuards(GqlAuthGuard, RolesGuard)
export class RaceResolver {
  constructor(private readonly raceService: RaceService) {}

  @Mutation(() => Race)
  @Roles(RolesEnum.ADMIN)
  createRace(@Args('payload') payload: CreateRaceInput) {
    return this.raceService.create(payload);
  }

  @Query(() => [Race], { name: 'races' })
  findAll() {
    return this.raceService.findAll();
  }

  @Query(() => Race, { name: 'race' })
  findOne(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.raceService.findOne(_id);
  }

  @Mutation(() => Race)
  @Roles(RolesEnum.ADMIN)
  updateRace(@Args('payload') payload: UpdateRaceInput) {
    return this.raceService.update(payload);
  }

  @Mutation(() => Race)
  @Roles(RolesEnum.ADMIN)
  removeRace(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.raceService.remove(_id);
  }
}
