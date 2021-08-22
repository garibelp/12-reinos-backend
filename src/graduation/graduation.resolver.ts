import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { GraduationService } from './graduation.service';
import { Graduation } from './entities/graduation.entity';
import { CreateGraduationInput } from './dto/create-graduation.input';
import { UpdateGraduationInput } from './dto/update-graduation.input';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import RolesEnum from 'src/enums/roles.enum';

@Resolver(() => Graduation)
@UseGuards(GqlAuthGuard, RolesGuard)
export class GraduationResolver {
  constructor(private readonly graduationService: GraduationService) {}

  @Mutation(() => Graduation)
  @Roles(RolesEnum.ADMIN)
  createGraduation(@Args('payload') payload: CreateGraduationInput) {
    return this.graduationService.create(payload);
  }

  @Query(() => [Graduation], { name: 'graduations' })
  findAll() {
    return this.graduationService.findAll();
  }

  @Query(() => Graduation, { name: 'graduation' })
  findOne(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.graduationService.findOne(_id);
  }

  @Mutation(() => Graduation)
  @Roles(RolesEnum.ADMIN)
  updateGraduation(@Args('payload') payload: UpdateGraduationInput) {
    return this.graduationService.update(payload);
  }

  @Mutation(() => Graduation)
  @Roles(RolesEnum.ADMIN)
  removeGraduation(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.graduationService.remove(_id);
  }
}
