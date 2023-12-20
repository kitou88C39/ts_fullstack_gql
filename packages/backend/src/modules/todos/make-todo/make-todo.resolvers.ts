import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';
import crypto from 'crypto';

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    makeTodo: async (
      _: any,
      args: { makeTodoInput },
      context: MyContext,
      info: any
    ) => {
      const todoItem = {
        id: crypto.randomUUID(),
        title: makeTodoInput.title,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      };

      return { todo: todoItem };
    },
  },
};
