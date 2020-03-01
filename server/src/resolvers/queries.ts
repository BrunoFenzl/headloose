

export const Query = {
  tree: async (parent, { id }, ctx, info) => { },
  component: async () => { },
  components: async (parent, { ids }, ctx, info) => {
    console.log(parent, ids, ctx, info);
    return {
      code: 200,
      message: 'all good',
      data: [],
    }
  },
}

export const Attributes = {
  __resolveType: (parent) => {
    console.log('resolver parent', parent);
    switch (parent.type) {
      case 'page':
        return 'PageAttributes';
      case 'column':
        return 'ColumnAttributes';
      case 'Row':
        return 'RowAttributes';
      default:
        return 'FormControlAttributes';
    }
  }
}
