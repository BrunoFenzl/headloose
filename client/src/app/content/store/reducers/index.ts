import { ActionReducerMap } from '@ngrx/store';
import { reducer as pageReducer } from './pages.reducer';
import { ContentState } from '../models';
// export everything
export * from './pages.reducer';

// Slice of the global state that shold be managed by the pages reducer
export const reducers: ActionReducerMap<ContentState> = {
  pages: pageReducer,
};
