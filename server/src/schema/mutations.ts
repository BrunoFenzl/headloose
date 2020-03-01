export const mutations = `
  type Mutation {
    addComponent(input: ComponentInput!): QueryResponse
    updateComponent(input: ComponentInput!): QueryResponse
    removeComponent(id: String!): QueryResponse
  }
`;

