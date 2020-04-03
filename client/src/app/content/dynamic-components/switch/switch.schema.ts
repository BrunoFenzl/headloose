import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';

/**
 * Default implementation with sensitive defaults
 */
export class SwitchDefaults implements DynamicComponentSchema {
  _type = 'Switch';
  name = 'switch';
  parent = null;
  attributes = {
    label: 'Label',
    parent: null,
    model: false,
    readonly: false,
    disabled: false,
    required: false,
    classnames: ['foo'],
  }

  constructor(options) {
    Object.assign(this, options);
  }
}
