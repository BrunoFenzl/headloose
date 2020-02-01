import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface ParagraphSchema extends DynamicComponentSchema {
  '@type': 'Paragraph' | string;
  parent: string | null;
  content: string;
  children: Array<string>; // id's of components below this one
  classes?: Array<string>;
}

export class ParagraphDefaults implements ParagraphSchema {
  '@id' = uuid();
  '@type' = 'Paragraph';
  content: 'I\'m a brand new paragrah!';
  parent = null;
  children = [];
  classes = [];

  constructor(options) {
    Object.assign(this, options);
  }
}
