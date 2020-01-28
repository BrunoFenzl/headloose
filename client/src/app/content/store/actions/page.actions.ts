import { Action } from '@ngrx/store';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export enum PageActionTypes {
  SELECT_COMPONENT = '[COMPONENT] Select Component',
  UPDATE_COMPONENT = '[COMPONENT] Update Component',
  ADD_COMPONENT = '[COMPONENT] Add Component',
  DELETE_COMPONENT = '[COMPONENT] Delete Component',
}

// Next Actions are for single pages
export class SelectComponentAction implements Action {
  readonly type = PageActionTypes.SELECT_COMPONENT;
  constructor(public payload: string) { }
}

export class UpdateComponentAction implements Action {
  readonly type = PageActionTypes.UPDATE_COMPONENT;
  constructor(public payload: DynamicComponentSchema) { }
}

export class AddComponentAction implements Action {
  readonly type = PageActionTypes.ADD_COMPONENT;
  constructor(public payload: DynamicComponentSchema) { }
}

export class DeleteComponentAction implements Action {
  readonly type = PageActionTypes.DELETE_COMPONENT;
  constructor(public payload: string) { }
}

export type PageAction =
  SelectComponentAction |
  UpdateComponentAction |
  AddComponentAction |
  DeleteComponentAction
  ;
