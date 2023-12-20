import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const buildSchema = () => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const pathToModules = path.join(__dirname, '..', 'modules');
  const pathToResolvers = path.join(pathToModules, '**', '*.resolvers.?s');
};
