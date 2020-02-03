import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { PageModel } from './pages.model';

export const pages: Array<PageModel> = [
  {
    id: '1',
    title: 'Page 1',
    path: '/pages/1.json'
  },
];

export const page1: DynamicPageSchema = {
  '@id': 'page-1',
  '@type': 'Page',
  children: ['row-1', 'row-2'],
  activeComponent: null,
  components: {
    'row-1': {
      '@id': 'row-1',
      '@type': 'Row',
      parent: 'page-1',
      children: ['column-1']
    },
    'row-2': {
      '@id': 'row-2',
      '@type': 'Row',
      parent: 'page-1',
      children: ['column-2', 'column-3', 'column-4']
    },
    'column-1': {
      '@id': 'column-1',
      '@type': 'Column',
      parent: 'row-1',
      classes: ['col-12'],
      children: ['headline-1']
    },
    'column-2': {
      '@id': 'column-2',
      '@type': 'Column',
      parent: 'row-2',
      classes: ['col-12', 'col-md-6', 'col-lg-4'],
      children: ['headline-2', 'paragraph-1']
    },
    'column-3': {
      '@id': 'column-3',
      '@type': 'Column',
      parent: 'row-2',
      classes: ['col-12', 'col-md-6', 'col-lg-4'],
      children: ['headline-3', 'paragraph-2']
    },
    'column-4': {
      '@id': 'column-4',
      '@type': 'Column',
      parent: 'row-2',
      classes: ['col-12', 'col-lg-4'],
      children: ['headline-4', 'paragraph-3']
    },
    'headline-1': {
      '@id': 'headline-1',
      '@type': 'Headline',
      content: 'Hello there! This is a demo page',
      model: 'h1',
      modelOptions: [
        { 'label': 'H1', 'value': 'h1' },
        { 'label': 'H2', 'value': 'h2' },
        { 'label': 'H3', 'value': 'h3' },
        { 'label': 'H4', 'value': 'h4' },
        { 'label': 'H5', 'value': 'h5' },
        { 'label': 'H6', 'value': 'h6' }
      ],
      parent: 'column-1',
      classes: ['headline'],
      children: []
    },
    'headline-2': {
      '@id': 'headline-2',
      '@type': 'Headline',
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
      parent: 'column-2',
      classes: ['headline'],
      children: []
    },
    'headline-3': {
      '@id': 'headline-3',
      '@type': 'Headline',
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
      parent: 'column-3',
      classes: ['headline'],
      children: []
    },
    'headline-4': {
      '@id': 'headline-4',
      '@type': 'Headline',
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
      parent: 'column-4',
      classes: ['headline'],
      children: []
    },
    'paragraph-1': {
      '@id': 'paragraph-1',
      '@type': 'Paragraph',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      parent: 'column-1',
      classes: ['p'],
      children: []
    },
    'paragraph-2': {
      '@id': 'paragraph-2',
      '@type': 'Paragraph',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      parent: 'column-2',
      classes: ['p'],
      children: []
    },
    'paragraph-3': {
      '@id': 'paragraph-3',
      '@type': 'Paragraph',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      parent: 'column-3',
      classes: ['p'],
      children: []
    },
  }
};

