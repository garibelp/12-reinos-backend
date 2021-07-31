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

  async login(user: User): Promise<{ access_token: string }> {
    const accessToken = this.jwtService.sign({
      email: user.email,
      sub: user._id,
    });

    await this.userService.update(
      {
        _id: user._id,
        lastToken: accessToken,
        lastLogin: new Date(),
      },
      user,
    );

    return {
      access_token: accessToken,
    };
  }

  async verify(token: string) {
    const decodedUser = this.jwtService.verify(token, {
      secret: String(process.env.JWT_SECRET),
    });

    const user = await this.userService.getByEmail(decodedUser.email);

    if (!user) {
      throw new Error('Unable to find user from token');
    }

    return user;
  }
}
