import { Action } from '@ngrx/store';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export enum ContentActionTypes {
  // page collection
  LOAD_PAGES = '[PAGE] Load Pages',
  LOAD_PAGES_SUCCESS = '[PAGE] Load Pages Success',
  LOAD_PAGES_FAILURE = '[PAGE] Load Pages Failure',
  // single page
  // Load
  LOAD_PAGE = '[PAGE] Load Single Page',
  LOAD_PAGE_SUCCESS = '[PAGE] Load Single Page Success',
  LOAD_PAGE_FAILURE = '[PAGE] Load Single Page Failure',
  // Add
  ADD_PAGE = '[PAGE] Add Page',
  ADD_PAGE_SUCCESS = '[PAGE] Add Page Success',
  ADD_PAGE_FAILURE = '[PAGE] Add Page Failure',
  // Update
  UPDATE_PAGE = '[PAGE] Update Page',
  UPDATE_PAGE_SUCCESS = '[PAGE] Update Page Success',
  UPDATE_PAGE_FAILURE = '[PAGE] Update Page Failure',
  // Delete
  DELETE_PAGE = '[PAGE] Delete Page',
  DELETE_PAGE_SUCCESS = '[PAGE] Delete Page Success',
  DELETE_PAGE_FAILURE = '[PAGE] Delete Page Failure',
}


/**
 * Load all pages
 */

// Next three Actions are for the list of pages
export class LoadPagesAction implements Action {
  readonly type = ContentActionTypes.LOAD_PAGES;
}

export class LoadPagesSuccessAction implements Action {
  readonly type = ContentActionTypes.LOAD_PAGES_SUCCESS;
  constructor(public payload: { [id: string]: DynamicPageSchema }) { }
}

export class LoadPagesFailureAction implements Action {
  readonly type = ContentActionTypes.LOAD_PAGES_FAILURE;
  constructor(public payload: Error) { }
}

/**
 * Load page
 */

// Next Actions are for single pages
export class LoadPageAction implements Action {
  readonly type = ContentActionTypes.LOAD_PAGE;
  constructor(public payload: string) { }
}

export class LoadPageSuccessAction implements Action {
  readonly type = ContentActionTypes.LOAD_PAGE_SUCCESS;
  constructor(public payload: DynamicPageSchema) { }
}

export class LoadPageFailureAction implements Action {
  readonly type = ContentActionTypes.LOAD_PAGE_FAILURE;
  constructor(public payload: Error) { }
}

/**
 * Add page
 */

export class AddPageAction implements Action {
  readonly type = ContentActionTypes.ADD_PAGE;
  constructor(public payload: DynamicPageSchema) { }
}

export class AddPageSuccessAction implements Action {
  readonly type = ContentActionTypes.ADD_PAGE_SUCCESS;
  constructor(public payload: DynamicPageSchema) { }
}

export class AddPageFailureAction implements Action {
  readonly type = ContentActionTypes.ADD_PAGE_FAILURE;
  constructor(public payload: Error) { }
}

/**
 * Update page
 */

export class UpdatePageAction implements Action {
  readonly type = ContentActionTypes.UPDATE_PAGE;
  constructor(public payload: DynamicPageSchema) { }
}

export class UpdatePageSuccessAction implements Action {
  readonly type = ContentActionTypes.UPDATE_PAGE_SUCCESS;
  constructor(public payload: DynamicPageSchema) { }
}

export class UpdatePageFailureAction implements Action {
  readonly type = ContentActionTypes.UPDATE_PAGE_FAILURE;
  constructor(public payload: Error) { }
}

/**
 * Delete page
 */

export class DeletePageAction implements Action {
  readonly type = ContentActionTypes.DELETE_PAGE;
  constructor(public payload: string) { }
}

export class DeletePageSuccessAction implements Action {
  readonly type = ContentActionTypes.DELETE_PAGE_SUCCESS;
  constructor(public payload: string) { }
}

export class DeletePageFailureAction implements Action {
  readonly type = ContentActionTypes.DELETE_PAGE_FAILURE;
  constructor(public payload: Error) { }
}

export type ContentAction =
  // page collection actions
  LoadPagesAction |
  LoadPagesSuccessAction |
  LoadPagesFailureAction |
  // single page actions
  // load
  LoadPageAction |
  LoadPageSuccessAction |
  LoadPageFailureAction |
  // add
  AddPageAction |
  AddPageSuccessAction |
  AddPageFailureAction |
  // update
  UpdatePageAction |
  UpdatePageSuccessAction |
  UpdatePageFailureAction |
  // delete
  DeletePageAction |
  DeletePageSuccessAction |
  DeletePageFailureAction
  ;
