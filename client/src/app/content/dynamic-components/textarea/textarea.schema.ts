import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface TextareaSchema extends DynamicComponentSchema {
  '@type': 'Textarea' | string;
  parent: string | null;
  label: string;
  model?: string;
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
  label = 'Label';
  model = 'Type some text…';
  parent = null;
  maxlength = 240;
  minlength = 0;
  size = 5;
  placeholder = 'Platzhalter';
  required = false;
  classes = ['textarea'];

  constructor(options = {}) {
    Object.assign(this, options);
  }
}
