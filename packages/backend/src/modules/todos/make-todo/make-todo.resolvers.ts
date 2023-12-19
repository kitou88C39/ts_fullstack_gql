import { title } from 'process';
import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';
import crypto from 'crypto';

const resolvers: Resolvers<MyContext> = {
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

      return 'todo has been created !';
    },
  },
};

export default resolvers;
