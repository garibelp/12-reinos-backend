import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as randomToken from 'rand-token';

import { User } from 'src/user/entities/user.entity';
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

  async login(
    user: User,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const accessToken = this.jwtService.sign({
      email: user.email,
      sub: user._id,
    });

    const refreshToken = randomToken.generate(64);

    const refreshTokenExpire = new Date();
    refreshTokenExpire.setDate(refreshTokenExpire.getDate() + 1);

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    await this.userService.update(
      {
        _id: user._id,
        refreshToken: hashedRefreshToken,
        refreshTokenExpire,
      },
      user,
    );

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
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
