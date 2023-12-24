import { GraphQLScalarType } from 'graphql';
import { Resolvers } from '../../_generated_/graphql.js';

export const resolvers: Resolvers = {
  DateTime: new GraphQLScalarType({
    name:"DateTime",
    description: "DateTime custom scalar type",
    serialize(value){

    },
    parseValue(value){

    },
    parseLiteral(ast)
  }),
};
