import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface SelectSchema extends DynamicComponentSchema {
  '@type': 'Select' | string;
  parent: string;
  name?: string;
  options: Array<SelectOption>;
  model?: string;
  size?: number;
  disabled?: boolean;
  required?: boolean;
  classes?: Array<string>;
}

export interface SelectOption {
  label: string;
  value: string;
}

/**
 * Default implementation with sensitive defaults
 */
export class SelectDefaults implements SelectSchema {
  '@id' = uuid();
  '@type' = 'Select';
  name = 'My select';
  parent = null;
  model = '';
  options = [];
  size = null;
  disabled = false;
  required = false;
  classes = ['select'];

  constructor(options) {
    Object.assign(this, options);
  }
}
