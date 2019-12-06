import { PageAction, PageActionTypes } from '../actions/pages.actions';
import { PagesModel, PageModel } from '../models';

const initialState: PagesModel = {
  entities: {},
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
      const e = action.payload.reduce(
        (entities: { [id: number]: PageModel }, page: PageModel) => {
          return {
            ...entities,
            [page.id]: page
          };
        },
        { ...state.entities }
      );

      const p = {
        ...state,
        entities: { ...e },
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
        entities: { ...state.entities, [action.payload.id]: action.payload },
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
      /*
        Very clever trick!
        Destructure the item identified by the payload AND use the Rest Spread operator to destructure
        the rest of the object BUT the one we destructure first. This way we can use entities cleaned off
        the item to delete.
      */
      const { [parseInt(action.payload, 10)]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities, // remove page with the id given in the payload
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
