import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface TextInputSchema extends DynamicComponentSchema {
  '@type': 'TextInput' | string;
  parent: string | null;
  maxlength?: number | null;
  minlength?: number | null;
  size?: number | null;
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
  parent = null;
  maxlength = null;
  minlength = null;
  size = null;
  readonly = false;
  placeholder = '';
  disabled = false;
  required = false;
  classes = ['input'];

  constructor(options) {
    Object.assign(this, options);
  }
}
