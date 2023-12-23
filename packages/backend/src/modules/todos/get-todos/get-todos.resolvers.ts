import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';

export const resolvers: Resolvers<MyContext> = {
  Query: {
    getTodos: async (_, args, { PrismaClient }, info) => {
      const todos = await context.PrismaClient.todo.findMany();
      return {
        todos: todos,
      };
    },
  },
};
