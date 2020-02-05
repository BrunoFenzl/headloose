import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../reducers';

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');
