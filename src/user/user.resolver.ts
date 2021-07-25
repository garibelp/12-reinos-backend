import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from './model/user.model';
import { CreateUserInput } from './user.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    return this.userService.create(payload);
  }
}
