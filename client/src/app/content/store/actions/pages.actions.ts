import { Action } from '@ngrx/store';
import { PageModel } from '../models/pages.model';

export enum PageActionTypes {
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
  readonly type = PageActionTypes.LOAD_PAGES;
}

export class LoadPagesSuccessAction implements Action {
  readonly type = PageActionTypes.LOAD_PAGES_SUCCESS;
  constructor(public payload: Array<PageModel>) { }
}

export class LoadPagesFailureAction implements Action {
  readonly type = PageActionTypes.LOAD_PAGES_FAILURE;
  constructor(public payload: Error) { }
}

// Next Actions are for single pages
export class LoadPageAction implements Action {
  readonly type = PageActionTypes.LOAD_PAGE;
  constructor(public payload: string) { }
}

export class LoadPageSuccessAction implements Action {
  readonly type = PageActionTypes.LOAD_PAGE_SUCCESS;
  constructor(public payload: PageModel) { }
}

export class LoadPageFailureAction implements Action {
  readonly type = PageActionTypes.LOAD_PAGE_FAILURE;
  constructor(public payload: Error) { }
}

export class AddPageAction implements Action {
  readonly type = PageActionTypes.ADD_PAGE;
  constructor(public payload: PageModel) { }
}

export class AddPageSuccessAction implements Action {
  readonly type = PageActionTypes.ADD_PAGE_SUCCESS;
  constructor(public payload: PageModel) { }
}

export class AddPageFailureAction implements Action {
  readonly type = PageActionTypes.ADD_PAGE_FAILURE;
  constructor(public payload: Error) { }
}

export class DeletePageAction implements Action {
  readonly type = PageActionTypes.DELETE_PAGE;
  constructor(public payload: string) { }
}

export class DeletePageSuccessAction implements Action {
  readonly type = PageActionTypes.DELETE_PAGE_SUCCESS;
  constructor(public payload: string) { }
}

export class DeletePageFailureAction implements Action {
  readonly type = PageActionTypes.DELETE_PAGE_FAILURE;
  constructor(public payload: Error) { }
}

export type PageAction =
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
