import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface NumberInputSchema extends DynamicComponentSchema {
  '@type': 'NumberInput' | string;
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
export class NumberInputDefaults implements NumberInputSchema {
  '@id' = uuid();
  '@type' = 'NumberInput';
  parent = null;
  maxlength = null;
  minlength = null;
  size = null;
  readonly = false;
  placeholder = '';
  disabled = false;
  required = false;
  classes = ['form-group'];

  constructor(options) {
    Object.assign(this, options);
  }
}
