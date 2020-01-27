
import { DynamicPageSchema, DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { getSelectedPageContent } from './pages.selectors';
import { createSelector } from '@ngrx/store';

/**
 * Returns an array containing the first level, direct children of this page
 */
export const getActiveComponent = createSelector(
  getSelectedPageContent,
  (state: DynamicPageSchema): DynamicComponentSchema => state.components[state.activeComponent]
);

/**
 * Returns an array containing the first level, direct children of this page
 */
export const getSelectedPageContentParsed = createSelector(
  getSelectedPageContent,
  (state: DynamicPageSchema): DynamicComponentSchema[] => state.children.map(id => state.components[id])
);

/**
 * Returns an array containing the first level, direct children of the component identified by props.id
 */
export const getComponentChildren = createSelector(
  getSelectedPageContent,
  (state: DynamicComponentSchema, props: { id: string }): DynamicComponentSchema[] => {
    return state.components[props.id].children.map(id => state.components[id]);
  }
);
