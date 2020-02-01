import { PageModel } from './pages.model';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export interface ContentState {
  pages: { [id: number]: PageModel };
  activePage: DynamicPageSchema | null;
  loading: boolean;
  error: Error;
}
