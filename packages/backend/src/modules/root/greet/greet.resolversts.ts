import { MyContext } from '../../../types/graphql.js';

export const resolvers = {
  Query: {
    health: async (_: any, args: any, context: MyContext, info: any) => {
      return true;
    },
  },
};
