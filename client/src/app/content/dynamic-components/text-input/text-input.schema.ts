import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';

/**
 * Default implementation with sensitive defaults
 */
export class TextInputDefaults implements DynamicComponentSchema {
  _type = 'TextInput';
  name = '';
  parent = null;
  attributes = {
    label: 'My text input label',
    model: 'value',
    placeholder: 'A Placeholder',
    readonly: false,
    disabled: false,
    required: false,
    classnames: ['textinput'],
  }

  constructor(options) {
    Object.assign(this, options);
  }
}
