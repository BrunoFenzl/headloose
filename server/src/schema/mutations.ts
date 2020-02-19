const mutations = `
  type Mutation {
    addComponent(input: ComponentInput): ComponentQueryResponse
    updateComponent(input: ComponentInput): ComponentQueryResponse
    removeComponent(input: ComponentInput): ComponentQueryResponse
  }
`;

export default [mutations];