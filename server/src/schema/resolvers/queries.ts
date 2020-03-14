import { ComponentModel, Component } from '../types/component';
import { QueryResponse } from '../types/queryResponse';

export const sdl = `
  type Query {
    tree(id: String!): QueryResponse
    component(id: String!): QueryResponse
    components(ids: [String]!): QueryResponse
  }
`;

export const Query = {
  tree: async (parent, { id }, ctx, info) => {
    const docs = [];
    async function getDoc(_id): Promise<Component> {
      const res = await ComponentModel.findById(_id);
      return res;
    }

    async function processData(_id): Promise<Component> {
      const doc = await getDoc(_id);

      if (doc.children) {
        for (let i = 0; i < doc.children.length; i++) {
          const newId = doc.children[i];
          docs.push(await processData(newId));
        }
      }

      return doc;
    }

    docs.push(await processData(id));

    return new QueryResponse(200, 'All good!', docs);
  },
  component: async (parent, { id }, ctx, info) => {
    const doc = await ComponentModel.findById(id);

    return new QueryResponse(200, 'All good!', [doc]);
  },
  components: async (parent, { ids }, ctx, info) => {
    const docs = await ComponentModel.find().where('_id').in(ids).exec();

    return new QueryResponse(200, 'All good!', docs);
  },
}
