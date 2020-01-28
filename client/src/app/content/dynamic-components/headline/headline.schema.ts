import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface HeadlineSchema extends DynamicComponentSchema {
  '@type': 'Headline' | string;
  parent: string | null;
  size: string;
  options: Array<Option>;
  content: string;
  children: Array<string>; // id's of components below this one
  classes?: Array<string>;
}

export interface Option {
  label: string;
  value: string;
}

export class HeadlineDefaults implements HeadlineSchema {
  '@id' = uuid();
  '@type' = 'Headline';
  content: 'I\'m a brand new Headline!';
  size: 'h1';
  options: [
    { label: 'H1', value: 'h1' },
    { label: 'H2', value: 'h2' },
    { label: 'H3', value: 'h3' },
    { label: 'H4', value: 'h4' },
    { label: 'H5', value: 'h5' },
    { label: 'H6', value: 'h6' }
  ];
  parent = null;
  children = [];
  classes = [];

  constructor(options) {
    Object.assign(this, options);
  }
}
