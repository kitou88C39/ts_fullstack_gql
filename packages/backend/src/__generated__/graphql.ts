import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;

// 型定義
export type scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

// クエリ
const query = gql`
  query {
    users {
      id
      name
    }
  }
`;

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
