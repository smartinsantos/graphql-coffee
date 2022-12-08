import { CustomScalar, Scalar } from '@nestjs/graphql';
import { ValueNode, Kind } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  // parse the value received from the client
  parseValue(value: number) {
    return new Date(value);
  }

  // serialize the value for the client
  serialize(value: Date) {
    return value.getTime();
  }

  // ast = abstract syntax tree (what is received from the query)
  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
