import { DynamicComponentSchema } from '../../../../dynamic-renderer/dynamic-components.interfaces';

export class ColumnDefaults implements DynamicComponentSchema {
  _type = 'Column';
  parent = null;
  children = [];
  name = 'column';
  attributes = {
    breakpoint_xs: 'col-12',
    breakpoint_sm: 'col-sm-12',
    breakpoint_md: 'col-md-12',
    breakpoint_lg: 'col-lg-12',
    classnames: ['column'],
  }

  constructor(options = {}) {
    Object.assign(this, options);
  }
}
