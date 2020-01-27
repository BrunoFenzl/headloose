import { PagesModel } from '../models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterState } from '../../../store';
import { PageModel } from '../models/pages.model';

// Set which part of the global state tree belongs to this feature module
export const getContentState = createFeatureSelector<PagesModel>('pages');

// Query first level and return only the 'pages' section from the global state tree
export const getPagesState = createSelector(
  getContentState,
  (state: PagesModel) => state.entities);

/**
 * Returns an Object of type PageModel with the page id from RouterState
 */
export const getSelectedPage = createSelector(
  getPagesState,
  getRouterState,
  (entities, router): PageModel => {
    return router.state && entities[router.state.params.id];
  }
);

/**
 * Returns an Object of type DynamicPageSchema
 */
export const getSelectedPageContent = createSelector(
  getSelectedPage,
  (state: PageModel) => state.content
);
