import { PagesModel, ContentState } from '../models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterState } from '../../../store';
import { PageModel } from '../models/pages.model';

// Set which part of the global state tree belongs to this feature module
export const getContentState = createFeatureSelector<ContentState>('content');

// Query first level and return only the 'pages' section from the global state tree
export const getContentPages = createSelector(
  getContentState,
  (state: ContentState) => state.pages
);

export const getPagesArray = createSelector(
  getContentPages,
  (state: { [id: number]: PageModel }) => Object.keys(state).map(key => state[key]));

/**
 * Returns an Object of type PageModel with the page id from RouterState
 */
export const getSelectedPage = createSelector(
  getContentPages,
  getRouterState,
  (pages, router): PageModel => {
    return router.state && pages[router.state.params.id];
  }
);

/**
 * Returns an Object of type DynamicPageSchema
 */
export const getSelectedPageContent = createSelector(
  getSelectedPage,
  (state: PageModel) => state.contentUrl
);
