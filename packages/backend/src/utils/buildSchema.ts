import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const buildSchema = async () => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const pathToModules = path.join(__dirname, '..', 'modules');
  const pathToResolvers = path.join(pathToModules, '**', '*.resolvers.?s');
  const resolversPromises = glob
    .sync(pathToResolvers)
    .map((resloversFile) => import(resloversFile));
  const resolvers = (await Promise.all(resolversPromises)).map(
    (fileItems) => fileItems.resolvers
  );
  const pathToTypeDefs = path.join(pathToModules, '**', '*.graphql');
};
