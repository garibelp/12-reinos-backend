import { registerEnumType } from '@nestjs/graphql';

enum RolesEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(RolesEnum, { name: 'RolesEnum' });

export default RolesEnum;
