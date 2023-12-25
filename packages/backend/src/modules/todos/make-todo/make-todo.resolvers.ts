import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    makeTodo: async (_, { makeTodoInput }, { prismaClient }, info) => {
      //console.log(`hello: ${makeTodoInput}`);
      const newTodo = await prismaClient.todo.create({
        date: {
          title: makeTodoInput.title,
        },
      });
      return {
        todo: {
          ...newTodo,
          updatedAt: newTodo.updatedAt.toISOString(),
          createdAt: newTodo.createdAt.toISOString(),
        },
      };
    },
  },
};
