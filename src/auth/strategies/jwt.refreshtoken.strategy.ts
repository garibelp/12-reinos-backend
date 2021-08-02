import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refreshtoken',
) {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('access_token'),
      ignoreExpiration: true,
      secretOrKey: configService.get<string>('JWT_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req, payload: { email: string; sub: string }) {
    const user = await this.userService.getByEmail(payload.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isValidToken = await bcrypt.compare(
      req.body.refresh_token,
      user.refreshToken,
    );

    if (!isValidToken) {
      throw new UnauthorizedException();
    }

    if (new Date() > new Date(user.refreshTokenExpire)) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
