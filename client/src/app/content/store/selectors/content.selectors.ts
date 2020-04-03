import { ContentState } from '../models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterState } from '../../../store';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

// Set which part of the global state tree belongs to this feature module
export const getContentState = createFeatureSelector<ContentState>('content');

// Query first level and return only the 'pages' section from the global state tree
export const getContentPages = createSelector(
  getContentState,
  (state: ContentState) => {
    console.log('getContentPages', state);
    return state.pages;
  }
);

export const getPagesArray = createSelector(
  getContentPages,
  (state: { [id: string]: DynamicPageSchema }) => Object.keys(state).map(key => state[key]));

/**
 * Returns an Object of type PageModel with the page id from RouterState
 */
export const getSelectedPage = createSelector(
  getContentPages,
  getRouterState,
  (pages, router): DynamicPageSchema => {
    console.log('getSelectedPage', pages, router);
    return router.state &&
      Object.keys(pages)
        .map(key => pages[key])
        .find((page) => page.attributes.slug === router.state.params.id);
  }
);

/**
 * Returns an Object of type DynamicPageSchema
 */
export const getSelectedPageContent = createSelector(
  getSelectedPage,
  (state: DynamicPageSchema) => {
    console.log('getSelectedPageContent', state);
    return state.attributes.content;
  }
);

export const getPagebyId = createSelector(
  getContentPages,
  (state: { [id: string]: DynamicPageSchema }, props: { id: string }): DynamicPageSchema => {
    return state[props.id];
  }
);
