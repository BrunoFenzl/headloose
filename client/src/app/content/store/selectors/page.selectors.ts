
import { DynamicPageSchema, DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { createSelector } from '@ngrx/store';
import { getContentState } from './content.selectors';
import { ContentState } from '../models';

// Set which part of the global state tree belongs to this feature module
export const getActivePageState = createSelector(
  getContentState,
  (state: ContentState) => state.activePage
);

/**
 * Returns an array containing the first level, direct children of this page
 */
export const getActiveComponent = createSelector(
  getActivePageState,
  (state: DynamicPageSchema): DynamicComponentSchema => state.components[state.activeComponent]
);

/**
 * Returns an array containing the first level, direct children of this page
 */
export const getSelectedPageContentParsed = createSelector(
  getActivePageState,
  (state: DynamicPageSchema): DynamicComponentSchema[] => state.children.map(id => state.components[id])
);

/**
 * Returns an array containing the first level, direct children of the component identified by props.id
 */
export const getComponentChildren = createSelector(
  getActivePageState,
  (state: DynamicComponentSchema, props: { id: string }): DynamicComponentSchema[] => {
    return state.components[props.id].children.map(id => state.components[id]);
  }
);
