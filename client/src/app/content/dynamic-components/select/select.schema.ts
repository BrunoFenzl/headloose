import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';

/**
 * Default implementation with sensitive defaults
 */
export class SelectDefaults implements DynamicComponentSchema {
  _type = 'Select';
  name = 'select';
  parent = null;
  attributes = {
    model: '',
    options: [],
    size: null,
    disabled: false,
    required: false,
    classnames: ['select'],
  }

  constructor(options) {
    Object.assign(this, options);
  }
}
