import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';

export const resolvers: Resolvers<MyContext> = {
  Query: {
    getTodo: async (_, { getTodoInput }, { prismaClient }, info) => {
      const todos = await prismaClient.todo.findMany();

      return {
        todos,
      };
    },
  },
};
