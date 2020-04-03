import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';

export class ParagraphDefaults implements DynamicComponentSchema {
  _type = 'Paragraph';
  parent = null;
  children = [];
  name = 'New Paragraph';
  attributes = {
    content: 'I\'m a brand new paragrah!',
    classnames: ['paragraph'],
  }

  constructor(options) {
    Object.assign(this, options);
  }
}
