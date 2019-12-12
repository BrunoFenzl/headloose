import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface ColumnSchema extends DynamicComponentSchema {
  '@type': 'Column' | string;
  classes?: Array<string>;
  children: Array<DynamicComponentSchema>;
}

export class ColumnDefaults implements ColumnSchema {
  '@id' = uuid();
  '@type' = 'Column';
  classes = [];
  children = [];

  constructor(options) {
    Object.assign(this, options);
  }
}
