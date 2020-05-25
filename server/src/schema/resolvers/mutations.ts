import { ComponentModel } from '../types/component';
import { QueryResponse } from '../types/queryResponse';

export const sdl = `
  type Mutation {
    addComponent(input: ComponentInput!): QueryResponse
    updateComponent(input: ComponentInput!): QueryResponse
    removeComponent(id: String!): QueryResponse
  }
`;

export const Mutation = {
  addComponent: async (parent, { input }, context, info) => {
    // Set timestamps right away
    // input.createdAt = new Date().toISOString();
    // input.modifiedAt = input.createdAt;

    const doc = await new ComponentModel(input).save();

    return new QueryResponse(200, 'Added', [doc]);
  },
  updateComponent: async (parent, { input }, context, info) => {
    // input.modifiedAt = new Date().toISOString();

    const doc = await ComponentModel.findByIdAndUpdate(
      input._id,
      input,
      { new: true }
    );

    return new QueryResponse(200, 'Updated', [doc]);
  },
  removeComponent: async (parent, { id }, context, info) => {
    const doc = await ComponentModel.findByIdAndDelete(
      id,
    );

    return new QueryResponse(200, 'Deleted', [doc]);
  },
}