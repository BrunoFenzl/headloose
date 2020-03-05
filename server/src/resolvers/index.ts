import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

import { Query, Attributes } from './queries';
import { Mutation } from './mutations';

export default {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query,
  Attributes,
  Mutation,
};