import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { AptitudeService } from './aptitude.service';
import { Aptitude } from './entities/aptitude.entity';
import { CreateAptitudeInput } from './dto/create-aptitude.input';
import { UpdateAptitudeInput } from './dto/update-aptitude.input';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import RolesEnum from 'src/enums/roles.enum';

@Resolver(() => Aptitude)
@UseGuards(GqlAuthGuard, RolesGuard)
export class AptitudeResolver {
  constructor(private readonly aptitudeService: AptitudeService) {}

  @Mutation(() => Aptitude)
  @Roles(RolesEnum.ADMIN)
  createAptitude(@Args('payload') payload: CreateAptitudeInput) {
    return this.aptitudeService.create(payload);
  }

  @Query(() => [Aptitude], { name: 'aptitudes' })
  findAll() {
    return this.aptitudeService.findAll();
  }

  @Query(() => Aptitude, { name: 'aptitude' })
  findOne(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.aptitudeService.findOne(_id);
  }

  @Mutation(() => Aptitude)
  @Roles(RolesEnum.ADMIN)
  updateAptitude(@Args('payload') payload: UpdateAptitudeInput) {
    return this.aptitudeService.update(payload);
  }

  @Mutation(() => Aptitude)
  @Roles(RolesEnum.ADMIN)
  removeAptitude(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.aptitudeService.remove(_id);
  }
}
