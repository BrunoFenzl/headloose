import { Action } from '@ngrx/store';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export enum ContentActionTypes {
  // page collection
  LOAD_PAGES = '[PAGE] Load Pages',
  LOAD_PAGES_SUCCESS = '[PAGE] Load Pages Success',
  LOAD_PAGES_FAILURE = '[PAGE] Load Pages Failure',
  // single page
  LOAD_PAGE = '[PAGE] Load Single Page',
  LOAD_PAGE_SUCCESS = '[PAGE] Load Single Page Success',
  LOAD_PAGE_FAILURE = '[PAGE] Load Single Page Failure',
  ADD_PAGE = '[PAGE] Add Page',
  ADD_PAGE_SUCCESS = '[PAGE] Add Page Success',
  ADD_PAGE_FAILURE = '[PAGE] Add Page Failure',
  DELETE_PAGE = '[PAGE] Delete Page',
  DELETE_PAGE_SUCCESS = '[PAGE] Delete Page Success',
  DELETE_PAGE_FAILURE = '[PAGE] Delete Page Failure',
}

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
  LoadPageAction |
  LoadPageSuccessAction |
  LoadPageFailureAction |
  AddPageAction |
  AddPageSuccessAction |
  AddPageFailureAction |
  DeletePageAction |
  DeletePageSuccessAction |
  DeletePageFailureAction
  ;
