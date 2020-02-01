import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface TextInputSchema extends DynamicComponentSchema {
  '@type': 'TextInput' | string;
  label: string;
  parent: string | null;
  max?: number | null;
  min?: number | null;
  step?: number | null;
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
  label = 'My input label';
  parent = null;
  max = 100;
  min = 0;
  step = 10;
  readonly = false;
  placeholder = '';
  disabled = false;
  required = false;
  classes = ['form-group'];

  constructor(options) {
    Object.assign(this, options);
  }
}
