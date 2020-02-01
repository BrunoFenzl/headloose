import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface HeadlineSchema extends DynamicComponentSchema {
  '@type': 'Headline' | string;
  parent: string | null;
  model: string;
  modelOptions: Array<Option>;
  content: string;
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
  model: 'h1';
  modelOptions: [
    { label: 'H1', value: 'h1' },
    { label: 'H2', value: 'h2' },
    { label: 'H3', value: 'h3' },
    { label: 'H4', value: 'h4' },
    { label: 'H5', value: 'h5' },
    { label: 'H6', value: 'h6' }
  ];
  parent = null;
  classes = [];

  constructor(options) {
    Object.assign(this, options);
  }
}
