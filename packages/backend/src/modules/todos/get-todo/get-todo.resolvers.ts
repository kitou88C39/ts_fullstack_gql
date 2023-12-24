import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';

export const resolvers: Resolvers<MyContext> = {
  Query: {
    getTodo: async (_, { getTodoInput }, { prismaClient }, info) => {
        const existingTodo = await prismaClient.todo.findUnique({
            where: {
              id: updateTodoInput.todoId,
            },
          });
          if (!existingTodo) {
            throw new GraphQLError('Not found');
          }
      };
    },
  },
};
