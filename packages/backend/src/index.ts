import http from 'http';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { MyContext } from './types/graphql.js';
import greetTypeDefs from './modules/root/greet/greet.typeDefs.js';
import greetResolvers from './modules/root/greet/greet.resolversts.js';
import makeTodoTypeDefs from './modules/todos/make-todo/make-todo.typeDefs.js';
import makeTodoResolvers from './modules/todos/make-todo/make-todo.resolvers.js';
import TodoTypeDefs from './modules/root/models/todo.typeDefs.js';

async function main() {
  const PORT = process.env.PORT || 5555;
  const app = express();

  const httpSever = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    typeDefs: mergeTypeDefs([greetTypeDefs, makeTodoTypeDefs, TodoTypeDefs]),
    resolvers: mergeResolvers([greetResolvers, makeTodoResolvers]),
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
