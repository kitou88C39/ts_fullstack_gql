import http from 'http';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

type MyContext = {
  req: express.Request;
  res: express.Response;
};

async function main() {
  const PORT = process.env.PORT || 5555;
  const app = express();

  const httpSever = http.createServer(app);
  const server = new ApolloServer<MyContext>({});
}
