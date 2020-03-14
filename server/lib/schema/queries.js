"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = `
  type Query {
    tree(id: String!): QueryResponse
    component(id: String!): QueryResponse
    components(ids: [String]!): QueryResponse
  }
`;
