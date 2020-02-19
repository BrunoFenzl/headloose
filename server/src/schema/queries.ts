const queries = `
  type Query {
    getTree(id: String!): ComponentQueryResponse
    getComponent(id: String!): ComponentQueryResponse
    getComponents(ids: [String]!): ComponentQueryResponse
  }
`;

export default [queries];