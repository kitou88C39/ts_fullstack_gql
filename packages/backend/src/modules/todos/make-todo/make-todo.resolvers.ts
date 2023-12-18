import { MyContext } from '../../../types/graphql.js';

const resolvers = {
  Mutation: {
    makeTodo: async (_: any, args: any, context: MyContext, info: any) => {
      console.log({ args });
      return 'todo has been created';
    },
  },
};

export default resolvers;
