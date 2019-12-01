import { Page } from '../models/pages.model';
import { PageAction, PageActionTypes } from '../actions/pages.actions';

export interface Pages {
  list: Page[];
  loading: boolean;
  error: Error;
}

const initialState: Pages = {
  list: [],
  loading: false,
  error: undefined,
};

export function PagesReducer(
  state: Pages = initialState,
  action: PageAction,
) {
  switch (action.type) {
    case PageActionTypes.LOAD_PAGES:
      return {
        ...state,
        loading: true,
      };
    case PageActionTypes.LOAD_PAGES_SUCCESS:
      console.log('reducer', action.payload);
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case PageActionTypes.LOAD_PAGES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case PageActionTypes.ADD_PAGE:
      return {
        ...state,
        loading: true,
      };
    case PageActionTypes.ADD_PAGE_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case PageActionTypes.ADD_PAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case PageActionTypes.DELETE_PAGE:
      return {
        ...state,
        loading: true,
      };
    case PageActionTypes.DELETE_PAGE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload), // remove page with the id given in the payload
        loading: false
      };
    case PageActionTypes.DELETE_PAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
