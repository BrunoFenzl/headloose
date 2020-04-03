import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';

export class RowDefaults implements DynamicComponentSchema {
  _type = 'Row';
  name = 'row';
  parent = null;
  children = [];
  classnames = ['row'];
  attributes = {
    no_gutters: false,
  };

  constructor(options = {}) {
    Object.assign(this, options);
  }
}
