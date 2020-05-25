import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface NumberInputSchema extends DynamicComponentSchema {
  '@type': 'NumberInput' | string;
  label: string;
  name: string;
  model: number;
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
export class NumberInputDefaults implements NumberInputSchema {
  '@id' = uuid();
  '@type' = 'NumberInput';
  label = 'My number input label';
  name = '';
  model = 0;
  parent = null;
  max = 100;
  min = 0;
  step = 10;
  readonly = false;
  placeholder = '';
  disabled = false;
  required = false;
  classes = ['foo'];

  constructor(options) {
    Object.assign(this, options);
  }
}
