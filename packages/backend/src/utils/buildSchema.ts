import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
