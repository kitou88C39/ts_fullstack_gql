import { Resolvers } from '../../../_generated_/graphql.js';
import { MyContext } from '../../../types/graphql.js';

const resolvers: Resolvers<MyContext> = {
  Mutation: {
    makeTodo: async (
      _: any,
      args: { title: string },
      context: MyContext,
      info: any
    ) => {
      args.makeTodoInput;
      context.req;

      return 'todo has been created !';
    },
  },
};

export default resolvers;
