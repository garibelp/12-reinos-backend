import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from 'src/user/model/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string) {
    const user = await this.userService.getByEmail(email);
    if (!user) {
      return null;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    return isValidPassword ? user : null;
  }

  login(user: User): { access_token: string } {
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user._id,
      }),
    };
  }

  async verify(token: string) {
    const decodedUser = this.jwtService.verify(token, {
      secret: 'test',
    });

    const user = await this.userService.getByEmail(decodedUser.email);

    if (!user) {
      throw new Error('Unable to find user from token');
    }

    return user;
  }
}
