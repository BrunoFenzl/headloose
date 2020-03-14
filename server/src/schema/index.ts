import { makeExecutableSchema } from 'graphql-tools';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { sdl as option } from './types/option';
import { sdl as attributes, AttributesResolver as Attributes } from './types/attributes';
import { sdl as component } from './types/component';
import { sdl as queryResponse } from './types/queryResponse';
import { sdl as mutations, Mutation } from './resolvers/mutations';
import { sdl as queries, Query } from './resolvers/queries';

const typeDefs = [
  'scalar JSON',
  'scalar JSONObject',
  mutations,
  queries,
  ...option,
  ...attributes,
  ...component,
  ...queryResponse,
];

const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Attributes,
  Mutation,
  Query
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;