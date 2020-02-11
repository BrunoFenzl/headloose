import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface ColumnSchema extends DynamicComponentSchema {
  '@type': 'Column' | string;
  parent: string | null;
  children: Array<string>; // id's of components below this one
  classes?: Array<string>;
}

export class ColumnDefaults implements ColumnSchema {
  '@id' = uuid();
  '@type' = 'Column';
  parent = null;
  children = [];
  classes = [];

  constructor(options = {}) {
    Object.assign(this, options);
  }
}
