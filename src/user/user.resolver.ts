import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/current-user.decorator';

import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { User } from './model/user.model';
import { CreateUserInput, UpdateUserInput } from './user.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    return this.userService.create(payload);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @CurrentUser() user: User,
    @Args('payload') payload: UpdateUserInput,
  ) {
    return this.userService.update(payload, user);
  }
}
