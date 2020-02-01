import { ContentAction, ContentActionTypes } from '../actions/content.actions';
import { PageModel, ContentState } from '../models';
import { PageAction, PageActionTypes } from '../actions';
import { pageReducer } from './page.reducer';

const initialState: ContentState = {
  pages: {},
  activePage: {
    '@id': '',
    '@type': 'Page',
    children: [],
    components: {},
  },
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
      const e = action.payload.reduce(
        (pages: { [id: number]: PageModel }, page: PageModel) => {
          return {
            ...pages,
            [page.id]: page
          };
        },
        { ...state.pages }
      );

      return {
        ...state,
        pages: { ...e },
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
        pages: { ...state.pages, [action.payload.id]: action.payload },
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
      const { [parseInt(action.payload, 10)]: removed, ...pages } = state.pages;

      return {
        ...state,
        pages, // remove page with the id given in the payload
        loading: false
      };
    case ContentActionTypes.DELETE_PAGE_FAILURE:
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
