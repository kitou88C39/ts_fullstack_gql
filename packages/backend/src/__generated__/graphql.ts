import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;

export type scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  maketodo: scalars['String'];
};

// リゾルバ
const resolvers = {
  Query: {
    users: () => [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ],
  },
};

// サーバーを起動
const server = new ApolloServer({
  typeDefs: query,
  resolvers,
  port: 4000,
});

server.listen().then(() => {
  console.log('Server is running on http://localhost:4000');
});
