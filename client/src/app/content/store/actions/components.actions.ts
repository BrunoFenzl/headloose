import { Action } from '@ngrx/store';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

export enum ComponentActionTypes {
  SELECT_COMPONENT = '[COMPONENT] Select Component',
  ADD_COMPONENT = '[COMPONENT] Add Component',
  DELETE_COMPONENT = '[COMPONENT] Delete Component',
}

// Next Actions are for single pages
export class SelectComponentAction implements Action {
  readonly type = ComponentActionTypes.SELECT_COMPONENT;
  constructor(public payload: DynamicComponentSchema) { }
}

export class AddComponentAction implements Action {
  readonly type = ComponentActionTypes.ADD_COMPONENT;
  constructor(public payload: DynamicComponentSchema) { }
}

export class DeleteComponentAction implements Action {
  readonly type = ComponentActionTypes.DELETE_COMPONENT;
  constructor(public payload: DynamicComponentSchema) { }
}

export type ComponentAction =
  SelectComponentAction |
  AddComponentAction |
  DeleteComponentAction
  ;
