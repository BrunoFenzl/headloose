import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export class PageDefaults implements DynamicPageSchema {
  _type = 'Page';
  name = 'new page';
  parent = null;
  children = [];
  activeComponent = null;
  components = {};
  attributes = {
    title: 'New Page',
    slug: 'new-page',
    order: 0,
    classnames: ['page'],
  };

  constructor(options) {
    Object.assign(this, options);
  }
}
