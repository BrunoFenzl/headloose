export const queries = `
  type Query {
    tree(id: String!): QueryResponse
    component(id: String!): QueryResponse
    components(ids: [String]!): QueryResponse
  }
`;
