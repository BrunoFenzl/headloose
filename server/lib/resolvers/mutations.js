// import { ComponentModel } from '../db';
// export const Mutation = {
//   addComponent: async (parent, { input }, context, info) => {
//     input.createdAt = new Date().toISOString();
//     input.modifiedAt = input.createdAt;
//     const doc = await new ComponentModel(input).save();
//     return {
//       code: 200,
//       message: 'added',
//       data: [doc],
//     };
//   },
//   updateComponent: async (parent, { input }, context, info) => {
//     input.modifiedAt = new Date().toISOString();
//     const doc = await ComponentModel.findByIdAndUpdate(
//       input._id,
//       input,
//       { new: true }
//     );
//     return {
//       code: 200,
//       message: 'updated',
//       data: [doc],
//     };
//   },
//   removeComponent: async (parent, { id }, context, info) => {
//     const doc = await ComponentModel.findByIdAndDelete(
//       id,
//     );
//     return {
//       code: 200,
//       message: 'deleted',
//       data: [doc],
//     };
//   },
// }
