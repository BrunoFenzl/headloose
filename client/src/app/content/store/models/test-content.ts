import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export const page1: DynamicPageSchema = {
  _id: 'page-1',
  _type: 'Page',
  name: 'page1',
  parent: null,
  children: ['row-1', 'row-2'],
  activeComponent: null,
  attributes: {
    title: 'Page 1',
    slug: 'page-1',
  },
  components: {
    'row-1': {
      _id: 'row-1',
      _type: 'Row',
      name: 'row',
      parent: 'page-1',
      children: ['column-1'],
      attributes: {}
    },
    'row-2': {
      _id: 'row-2',
      _type: 'Row',
      name: 'row',
      parent: 'page-1',
      children: ['column-2', 'column-3', 'column-4'],
      attributes: {}
    },
    'column-1': {
      _id: 'column-1',
      _type: 'Column',
      name: 'column',
      parent: 'row-1',
      children: ['headline-1'],
      attributes: {
        classnames: ['col-12']
      }
    },
    'column-2': {
      _id: 'column-2',
      _type: 'Column',
      name: 'column',
      parent: 'row-2',
      children: ['headline-2', 'paragraph-1'],
      attributes: {
        classnames: ['col-12', 'col-md-6', 'col-lg-4']
      }
    },
    'column-3': {
      _id: 'column-3',
      _type: 'Column',
      name: 'column',
      parent: 'row-2',
      children: ['headline-3', 'paragraph-2'],
      attributes: {
        classnames: ['col-12', 'col-md-6', 'col-lg-4']
      }
    },
    'column-4': {
      _id: 'column-4',
      _type: 'Column',
      name: 'column',
      parent: 'row-2',
      children: ['headline-4', 'paragraph-3'],
      attributes: {
        classnames: ['col-12', 'col-lg-4']
      }
    },
    'headline-1': {
      _id: 'headline-1',
      _type: 'Headline',
      parent: 'column-1',
      name: 'column-1',
      children: [],
      attributes: {
        content: 'Hello there! This is a demo page',
        model: 'h3',
        modelOptions: [
          { 'label': 'H1', 'value': 'h1' },
          { 'label': 'H2', 'value': 'h2' },
          { 'label': 'H3', 'value': 'h3' },
          { 'label': 'H4', 'value': 'h4' },
          { 'label': 'H5', 'value': 'h5' },
          { 'label': 'H6', 'value': 'h6' }
        ],
        classnames: ['headline'],
      }
    },
    'headline-2': {
      _id: 'headline-2',
      _type: 'Headline',
      name: 'column-2',
      parent: 'column-2',
      children: [],
      attributes: {
        content: 'This is feature #1!',
        model: 'h3',
        modelOptions: [
          { 'label': 'H1', 'value': 'h1' },
          { 'label': 'H2', 'value': 'h2' },
          { 'label': 'H3', 'value': 'h3' },
          { 'label': 'H4', 'value': 'h4' },
          { 'label': 'H5', 'value': 'h5' },
          { 'label': 'H6', 'value': 'h6' }
        ],
        classnames: ['headline'],
      }
    },
    'headline-3': {
      _id: 'headline-3',
      _type: 'Headline',
      name: 'headline-3',
      parent: 'column-3',
      attributes: {
        content: 'This is feature #2!',
        model: 'h3',
        modelOptions: [
          { 'label': 'H1', 'value': 'h1' },
          { 'label': 'H2', 'value': 'h2' },
          { 'label': 'H3', 'value': 'h3' },
          { 'label': 'H4', 'value': 'h4' },
          { 'label': 'H5', 'value': 'h5' },
          { 'label': 'H6', 'value': 'h6' }
        ],
        classnames: ['headline'],
      }
    },
    'headline-4': {
      _id: 'headline-4',
      _type: 'Headline',
      name: 'headline-4',
      parent: 'column-4',
      children: [],
      attributes: {
        content: 'This is feature #3!',
        model: 'h3',
        modelOptions: [
          { 'label': 'H1', 'value': 'h1' },
          { 'label': 'H2', 'value': 'h2' },
          { 'label': 'H3', 'value': 'h3' },
          { 'label': 'H4', 'value': 'h4' },
          { 'label': 'H5', 'value': 'h5' },
          { 'label': 'H6', 'value': 'h6' }
        ],
        classnames: ['headline'],
      }
    },
    'paragraph-1': {
      _id: 'paragraph-1',
      _type: 'Paragraph',
      parent: 'column-1',
      name: 'paragraph-1',
      children: [],
      attributes: {
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        classnames: ['p'],
      }
    },
    'paragraph-2': {
      _id: 'paragraph-2',
      _type: 'Paragraph',
      name: 'paragraph-2',
      parent: 'column-2',
      children: [],
      attributes: {
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        classnames: ['p'],
      }
    },
    'paragraph-3': {
      _id: 'paragraph-3',
      _type: 'Paragraph',
      parent: 'column-3',
      name: 'paragraph-3',
      children: [],
      attributes: {
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        classnames: ['p']
      }
    },
  }
};

export const pages: { [id: string]: DynamicPageSchema } = {
  'page-1': page1
};
