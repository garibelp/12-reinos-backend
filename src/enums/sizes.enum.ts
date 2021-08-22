import { registerEnumType } from '@nestjs/graphql';

enum SizeEnum {
  MIUDO = 'MIUDO',
  PEQUENO = 'PEQUENO',
  MEDIO = 'MEDIO',
  GRANDE = 'GRANDE',
  ENORME = 'ENORME',
  IMENSO = 'IMENSO',
}

registerEnumType(SizeEnum, { name: 'SizeEnum' });

export default SizeEnum;
