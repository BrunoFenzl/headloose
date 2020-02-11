import { ContentAction, ContentActionTypes } from '../actions/content.actions';
import { ContentState } from '../models';
import { pages } from '../models/test-content';
import { PageAction, PageActionTypes } from '../actions';
import { pageReducer } from './page.reducer';

const initialState: ContentState = {
  pages,
  activePage: null,
  loading: false,
  error: undefined,
};

export function contentReducer(
  state: ContentState = initialState,
  action: ContentAction | PageAction,
): ContentState {
  switch (action.type) {
    case ContentActionTypes.LOAD_PAGES:
      return {
        ...state,
        loading: true,
      };
    case ContentActionTypes.LOAD_PAGES_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ContentActionTypes.LOAD_PAGES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ContentActionTypes.ADD_PAGE:
      return {
        ...state,
        loading: true,
      };
    case ContentActionTypes.ADD_PAGE_SUCCESS:
      return {
        ...state,
        pages: { ...state.pages, [action.payload['@id']]: action.payload },
        loading: false
      };
    case ContentActionTypes.ADD_PAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ContentActionTypes.DELETE_PAGE:
      return {
        ...state,
        loading: true,
      };
    case ContentActionTypes.DELETE_PAGE_SUCCESS:
      /*
        Very clever trick!
        Destructure the item identified by the payload AND use the Rest Spread operator to destructure
        the rest of the object BUT the one we destructure first. This way we can use entities cleaned off
        the item to delete.
      */
      const { [action.payload]: removed, ...rest } = state.pages;

      return {
        ...state,
        pages: rest,
        loading: false
      };
    case ContentActionTypes.DELETE_PAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ContentActionTypes.UPDATE_PAGE:
      console.log('update page', action.payload);
      return {
        ...state,
        loading: true,
      };
    case ContentActionTypes.UPDATE_PAGE_SUCCESS:
      console.log('update page success', action.payload);
      return {
        ...state,
        pages: { ...state.pages, [action.payload['@id']]: action.payload },
        activePage: action.payload,
        loading: false,
      };
    case ContentActionTypes.UPDATE_PAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ContentActionTypes.LOAD_PAGE:
      return {
        ...state,
        loading: true,
      };
    case ContentActionTypes.LOAD_PAGE_SUCCESS:
      return {
        ...state,
        activePage: action.payload,
        loading: false,
      };
    case ContentActionTypes.LOAD_PAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case PageActionTypes.SELECT_COMPONENT:
    case PageActionTypes.UPDATE_COMPONENT:
    case PageActionTypes.ADD_COMPONENT:
    case PageActionTypes.DELETE_COMPONENT:
      return {
        ...state,
        activePage: pageReducer(state.activePage, action),
      };
    default:
      return state;
  }
}
