import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';

export class HeadlineDefaults implements DynamicComponentSchema {
  _type = 'Headline';
  name = 'headline';
  parent = null;
  attributes = {
    content: 'I\'m a brand new Headline!',
    model: 'h1',
    modelOptions: [
      { label: 'H1', value: 'h1' },
      { label: 'H2', value: 'h2' },
      { label: 'H3', value: 'h3' },
      { label: 'H4', value: 'h4' },
      { label: 'H5', value: 'h5' },
      { label: 'H6', value: 'h6' }
    ],
    classnames: ['headline'],
  }

  constructor(options) {
    Object.assign(this, options);
  }
}
