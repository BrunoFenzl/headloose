import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface TextInputSchema extends DynamicComponentSchema {
  '@type': 'TextInput' | string;
  label: string;
  name: string;
  model: string;
  parent: string;
  maxlength?: number;
  minlength?: number;
  size?: number;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  classes?: Array<string>;
}

/**
 * Default implementation with sensitive defaults
 */
export class TextInputDefaults implements TextInputSchema {
  '@id' = uuid();
  '@type' = 'TextInput';
  label = 'My text input label';
  name = '';
  model = '';
  parent = '';
  placeholder = '';
  readonly = false;
  disabled = false;
  required = false;
  classes = ['foo'];

  constructor(options) {
    Object.assign(this, options);
  }
}
