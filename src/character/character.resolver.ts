import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { User } from 'src/user/model/user.model';

import {
  CreateCharacterInput,
  ListCharacterInput,
  UpdateCharacterInput,
} from './character.input';
import { CharacterService } from './character.service';
import { Character } from './model/character.model';

@Resolver()
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  @Query(() => Character)
  @UseGuards(GqlAuthGuard)
  async character(
    @CurrentUser() user: User,
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.characterService.getById(_id, user);
  }

  @Query(() => [Character])
  @UseGuards(GqlAuthGuard)
  async characters(
    @CurrentUser() user: User,
    @Args('filters', { nullable: true }) filters?: ListCharacterInput,
  ) {
    return this.characterService.list(filters, user);
  }

  @Mutation(() => Character)
  @UseGuards(GqlAuthGuard)
  async createCharacter(
    @CurrentUser() user: User,
    @Args('payload') payload: CreateCharacterInput,
  ) {
    return this.characterService.create(payload, user);
  }

  @Mutation(() => Character)
  @UseGuards(GqlAuthGuard)
  async updateCharacter(
    @CurrentUser() user: User,
    @Args('payload') payload: UpdateCharacterInput,
  ) {
    return this.characterService.update(payload, user);
  }

  @Mutation(() => Character)
  @UseGuards(GqlAuthGuard)
  async deleteCharacter(
    @CurrentUser() user: User,
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.characterService.delete(_id, user);
  }
}
