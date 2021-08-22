import { registerEnumType } from '@nestjs/graphql';

enum LanguagesEnum {
  COMUM = 'COMUM',
  ANAO = 'ANAO',
  ELFO = 'ELFO',
  ANGUISA = 'ANGUISA',
  GIGASSE = 'GIGASSE',
  COGNI = 'COGNI',
  EXTRA = 'EXTRA', // Extra language to choose
}

registerEnumType(LanguagesEnum, { name: 'LanguagesEnum' });

export default LanguagesEnum;
