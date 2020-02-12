import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export interface ContentState {
  pages: { [id: string]: DynamicPageSchema };
  loading: boolean;
  error: Error;
  activePage?: DynamicPageSchema;
}
