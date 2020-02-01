import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface TextareaSchema extends DynamicComponentSchema {
  '@type': 'Textarea' | string;
  parent: string | null;
  maxlength?: number;
  minlength?: number;
  size?: number;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
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
  placeholder = 'platzhalter';
  required = false;
  classes = ['textarea'];

  constructor(options) {
    Object.assign(this, options);
  }
}
