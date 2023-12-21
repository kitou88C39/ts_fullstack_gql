import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';
import crypto from 'crypto';

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    makeTodo: async (_, { makeTodoInput }, { prismaClient }, info) => {
      const newTodo = await prismaClient.todo.create({
        date: {
          title: makeTodoInput.title,
        },
      });
      newTodo.createdAt;
      return {
        ...newTodo,
        updatedAt: newTodo.updatedAt.toISOString(),
        createdAt: newTodo.createdAt.toISOString(),
      };
    },
  },
};
