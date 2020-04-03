import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';

/**
 * Default implementation with sensitive defaults
 */
export class NumberInputDefaults implements DynamicComponentSchema {
  _type = 'NumberInput';
  parent = null;
  name = 'number input';
  attributes = {
    label: 'My number input label',
    model: 0,
    parent: null,
    max: 100,
    min: 0,
    step: 10,
    readonly: false,
    placeholder: '',
    disabled: false,
    required: false,
    classnames: ['number'],
  };

  constructor(options) {
    Object.assign(this, options);
  }
}
