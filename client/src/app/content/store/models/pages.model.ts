import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export interface PageModel {
  id?: string;
  title: string;
  path: string;
  contentUrl: string;
}

export interface PagesModel {
  entities: { [id: number]: PageModel };
  loading: boolean;
  error: Error;
}
