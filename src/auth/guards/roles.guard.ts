import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

import RolesEnum from 'src/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Create GraphQL context to extract current user
    const ctx = GqlExecutionContext.create(context);

    // Extract roles needed
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    // Extract user roles
    const request = ctx.getContext().req;
    const user = request.user;

    // Check if user have all the roles needed
    return roles.every((r: RolesEnum) => user.roles.includes(r));
  }
}
