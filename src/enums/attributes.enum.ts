import { registerEnumType } from '@nestjs/graphql';

enum AttributeEnum {
  TEN = 'TEN',
  CEL = 'CEL',
  INT = 'INT',
  AST = 'AST',
}

registerEnumType(AttributeEnum, { name: 'AttributeEnum' });

export default AttributeEnum;
