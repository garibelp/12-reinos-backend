import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

import { CharacterModule } from './character/character.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';
import { AptitudeModule } from './aptitude/aptitude.module';
import { BackgroundModule } from './background/background.module';
import { RaceModule } from './race/race.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: false,
    }),
    MongooseModule.forRoot(process.env.DB_URL, {
      useFindAndModify: false,
    }),
    CharacterModule,
    UserModule,
    AuthModule,
    AptitudeModule,
    BackgroundModule,
    RaceModule,
  ],
})
export class AppModule {}
