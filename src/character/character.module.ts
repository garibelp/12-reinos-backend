import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Character, CharacterSchema } from './model/character.model';
import { CharacterService } from './character.service';
import { CharacterResolver } from './character.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Character.name, schema: CharacterSchema },
    ]),
  ],
  providers: [CharacterService, CharacterResolver],
})
export class CharacterModule {}
