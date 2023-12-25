import { GraphQLError } from 'graphql';
import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    removeTodo: async (_, { removeTodoInput }, { prismaClient }, info) => {
      const existingTodo = await prismaClient.todo.findUnique({
        where: {
          id: removeTodoInput.todoId,
        },
      });
      if (!existingTodo) {
        throw new GraphQLError('Not found');
      }
      await prismaClient.todo.delete({
        where: {
          id: existingTodo.id,
        },
      });
      return {
        todo: {
          ...existingTodo,
          updatedAt: existingTodo.updatedAt,
          createdAt: existingTodo.createdAt,
        },
      };
    },
  },
};
