import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

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
  async character(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.characterService.getById(_id);
  }

  @Query(() => [Character])
  async characters(
    @Args('filters', { nullable: true }) filters?: ListCharacterInput,
  ) {
    return this.characterService.list(filters);
  }

  @Mutation(() => Character)
  async createCharacter(@Args('payload') payload: CreateCharacterInput) {
    return this.characterService.create(payload);
  }

  @Mutation(() => Character)
  async updateCharacter(@Args('payload') payload: UpdateCharacterInput) {
    return this.characterService.update(payload);
  }

  @Mutation(() => Character)
  async deleteCharacter(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.characterService.delete(_id);
  }
}
