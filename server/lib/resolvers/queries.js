// import { ComponentModel } from '../db';
// export const Query = {
//   tree: async (parent, { id }, ctx, info) => {
//     const docs = [];
//     async function getDoc(_id) {
//       const res = await ComponentModel.findById(_id);
//       return res;
//     }
//     async function processData(_id) {
//       const doc = await getDoc(_id);
//       if (doc.children) {
//         for (let i = 0; i < doc.children.length; i++) {
//           const newId = doc.children[i];
//           docs.push(await processData(newId));
//         }
//       }
//       return doc;
//     }
//     docs.push(await processData(id));
//     return {
//       code: 200,
//       message: 'all good',
//       data: docs,
//     }
//   },
//   component: async (parent, { id }, ctx, info) => {
//     const doc = await ComponentModel.findById(id);
//     return {
//       code: 200,
//       message: 'all good',
//       data: [doc],
//     }
//   },
//   components: async (parent, { ids }, ctx, info) => {
//     const docs = await ComponentModel.find().where('_id').in(ids).exec();
//     return {
//       code: 200,
//       message: 'all good',
//       data: docs,
//     }
//   },
// }
// export const Attributes = {
//   __resolveType: (parent) => {
//     console.log('resolver parent', parent);
//     switch (parent.type) {
//       case 'page':
//         return 'PageAttributes';
//       case 'column':
//         return 'ColumnAttributes';
//       case 'Row':
//         return 'RowAttributes';
//       default:
//         return 'FormControlAttributes';
//     }
//   }
// }
