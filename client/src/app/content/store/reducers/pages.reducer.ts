import { PageAction, PageActionTypes } from '../actions/pages.actions';
import { PagesModel } from '../models';
import { PagesEffects } from '../effects/pages.effects';

const initialState: PagesModel = {
  data: [],
  loading: false,
  error: undefined,
};

export function reducer(
  state: PagesModel = initialState,
  action: PageAction,
): PagesModel {
  switch (action.type) {
    case PageActionTypes.LOAD_PAGES:
      return {
        ...state,
        loading: true,
      };
    case PageActionTypes.LOAD_PAGES_SUCCESS:
      const p = {
        ...state,
        data: action.payload,
        loading: false,
      };
      return p;
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
        data: [...state.data, action.payload],
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
        data: state.data.filter(item => item.id !== action.payload), // remove page with the id given in the payload
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
