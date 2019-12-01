import { Action } from '@ngrx/store';
import { Page } from '../models/pages.model';

export enum PageActionTypes {
  LOAD_PAGES = '[PAGE] Load Page',
  LOAD_PAGES_SUCCESS = '[PAGE] Load Page Success',
  LOAD_PAGES_FAILURE = '[PAGE] Load Page Failure',
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
  constructor(public payload: Array<Page>) {}
}

export class LoadPagesFailureAction implements Action {
  readonly type = PageActionTypes.LOAD_PAGES_FAILURE;
  constructor(public payload: Error) {}
}

// Next Actions are for single pages
export class AddPageAction implements Action {
  readonly type = PageActionTypes.ADD_PAGE;
  constructor(public payload: Page) {}
}

export class AddPageSuccessAction implements Action {
  readonly type = PageActionTypes.ADD_PAGE_SUCCESS;
  constructor(public payload: Page) {}
}

export class AddPageFailureAction implements Action {
  readonly type = PageActionTypes.ADD_PAGE_FAILURE;
  constructor(public payload: Error) {}
}

export class DeletePageAction implements Action {
  readonly type = PageActionTypes.DELETE_PAGE;
  constructor(public payload: string) {}
}

export class DeletePageSuccessAction implements Action {
  readonly type = PageActionTypes.DELETE_PAGE_SUCCESS;
  constructor(public payload: string) {}
}

export class DeletePageFailureAction implements Action {
  readonly type = PageActionTypes.DELETE_PAGE_FAILURE;
  constructor(public payload: Error) {}
}

export type PageAction =
  LoadPagesAction |
  LoadPagesSuccessAction |
  LoadPagesFailureAction |
  AddPageAction |
  AddPageSuccessAction |
  AddPageFailureAction |
  DeletePageAction |
  DeletePageSuccessAction |
  DeletePageFailureAction
;
