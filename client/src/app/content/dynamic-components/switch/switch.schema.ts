import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface SwitchSchema extends DynamicComponentSchema {
  '@type': 'Switch' | string;
  parent: string | null;
  model: boolean;
  label?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  classes?: Array<string>;
}

/**
 * Default implementation with sensitive defaults
 */
export class SwitchDefaults implements SwitchSchema {
  '@id' = uuid();
  '@type' = 'Switch';
  label = 'Label';
  parent = null;
  model = false;
  readonly = false;
  disabled = false;
  required = false;
  classes = ['foo'];

  constructor(options) {
    Object.assign(this, options);
  }
}
