import http from 'http';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

const typeDefs = `#graphql
    type Query {
    health: Boolean
}
`;

type MyContext = {
  req: express.Request;
  res: express.Response;
};

async function main() {
  const PORT = process.env.PORT || 5555;
  const app = express();

  const httpSever = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    typeDefs: mergeTypeDefs([]),
    resolvers: mergeResolvers([]),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: httpSever })],
  });
  await server.start();
  app.use(express.json());
  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ req, res }),
    })
  );
  await new Promise<void>((resolve) => {
    httpSever.listen({ port: PORT }, resolve);
  });
  console.log(`server is up and running at http://localhost:{PORT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
