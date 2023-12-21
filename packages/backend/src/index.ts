import http from 'http';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import { PrismaPromise } from '@prisma/client';
import { MyContext } from './types/graphql.js';
import { buildSchema } from './utils/buildSchema.js';

async function main() {
  const PORT = process.env.PORT || 5555;
  const app = express();

  const httpSever = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    schema: await buildSchema(),
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
