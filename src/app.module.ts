import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { CharacterModule } from './character/character.module';
// import { loggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: false,
      // Loggger interceptor of graphql requests
      // buildSchemaOptions: {
      //   fieldMiddleware: [loggerMiddleware],
      // },
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/12-reinos-db', {
      useFindAndModify: false,
    }),
    CharacterModule,
  ],
})
export class AppModule {}
