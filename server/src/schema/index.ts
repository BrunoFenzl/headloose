import { makeExecutableSchema } from 'graphql-tools';
import { types } from './types';
import { queries } from './queries';
import { mutations } from './mutations';
import resolvers from '../resolvers';

const schema = makeExecutableSchema({
  typeDefs: [...types, queries, mutations],
  resolvers
});

export default schema;