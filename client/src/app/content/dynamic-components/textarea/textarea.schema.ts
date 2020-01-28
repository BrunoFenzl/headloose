import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface TextareaSchema extends DynamicComponentSchema {
  '@type': 'Textarea' | string;
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
export class TextareaDefaults implements TextareaSchema {
  '@id' = uuid();
  '@type' = 'Textarea';
  parent = null;
  maxlength = null;
  minlength = null;
  size = null;
  readonly = false;
  placeholder = '';
  disabled = false;
  required = false;
  classes = ['textarea'];

  constructor(options) {
    Object.assign(this, options);
  }
}
