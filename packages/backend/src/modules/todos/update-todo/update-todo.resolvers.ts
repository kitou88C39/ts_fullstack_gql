import { GraphQLError } from 'graphql';
import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    updateTodo: async (_, { updateTodoInput }, { prismaClient }, info) => {
      const existingTodo = await prismaClient.todo.findUnique({
        where: {
          id: updateTodoInput.todoId,
        },
      });
      if (!existingTodo) {
        throw new GraphQLError('Not found');
      }

      if (typeof updateTodoInput.title === 'string') {
        existingTodo.title = updateTodoInput.title;
      }

      if (typeof updateTodoInput.isCompleted === 'boolean') {
        existingTodo.isCompleted = updateTodoInput.isCompleted;
      }

      return {
        todo: {
          ...existingTodo,
          updatedAt: existingTodo.updatedAt.toISOString(),
          createdAt: existingTodo.createdAt.toISOString(),
        },
      };
    },
  },
};
