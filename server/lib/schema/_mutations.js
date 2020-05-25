"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
exports.mutations = `
  type Mutation {
    addComponent(input: ComponentInput!): QueryResponse
    updateComponent(input: ComponentInput!): QueryResponse
    removeComponent(id: String!): QueryResponse
  }
`;
