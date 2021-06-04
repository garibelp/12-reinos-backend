import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharacterService {
  readonly charList: Character[] = [];

  create(createCharacterDto: CreateCharacterDto): number {
    const id: number = Math.floor(Math.random() * 10);
    this.charList.push({
      id,
      ...createCharacterDto,
    });
    return id;
  }

  findAll(): Character[] {
    return this.charList;
  }

  findOne(id: number): Character {
    return this.charList.find((c) => c.id === id);
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
