import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface RowSchema extends DynamicComponentSchema {
  '@type': 'Row' | string;
  classes?: Array<string>;
  children: Array<DynamicComponentSchema>;
}

export class RowDefaults implements RowSchema {
  '@id' = uuid();
  '@type' = 'Row';
  classes = [];
  children = [];

  constructor(options) {
    Object.assign(this, options);
  }
}
