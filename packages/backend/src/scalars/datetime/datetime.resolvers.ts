import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';
import { Resolvers } from '../../_generated_/graphql.js';
import { DateTimeResolver } from 'graphql-scalars';

export const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
};
