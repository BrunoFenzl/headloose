import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';
import { v4 as uuid } from 'uuid';

export interface RowSchema extends DynamicComponentSchema {
  '@type': 'Row' | string;
  parent: string | null;
  children: Array<string>; // id's of components below this one
  classes?: Array<string>;
}

export class RowDefaults implements RowSchema {
  '@id' = uuid();
  '@type' = 'Row';
  parent = null;
  children = [];
  classes = [];

  constructor(options = {}) {
    Object.assign(this, options);
  }
}
