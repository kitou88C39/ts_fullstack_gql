import { GraphQLScalarType } from 'graphql';
import { Resolvers } from '../../_generated_/graphql.js';

export const resolvers: Resolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'DateTime custom scalar type',
    serialize(value) {
      console.log('serialize');
      console.log({ value });
      return value;
    },
    parseValue(value) {},
    parseLiteral(ast) {},
  }),
};
