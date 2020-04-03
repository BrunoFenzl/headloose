import { DynamicComponentSchema, DynamicComponentAttributes } from '../../../../dynamic-renderer/dynamic-components.interfaces';

/**
 * Default implementation with sensitive defaults
 */
export class TextareaDefaults implements DynamicComponentSchema {
  _type = 'Textarea';
  parent = null;
  name = 'New textarea';
  attributes = {
    label: 'Label',
    model: 'Type some text…',
    maxlength: 240,
    minlength: 0,
    size: 5,
    placeholder: 'This is a placeholder',
    required: false,
    classnames: ['textarea'],
  }

  constructor(options = {}) {
    Object.assign(this, options);
  }
}
