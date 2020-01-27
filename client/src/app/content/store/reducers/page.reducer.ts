import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { PageActionTypes, PageAction } from '../actions';

const initialState: DynamicPageSchema = {
  '@id': '',
  '@type': 'Page',
  children: [],
  components: {},
  activeComponent: null,
};

export function pageReducer(
  state: DynamicPageSchema = initialState,
  action: PageAction
): DynamicPageSchema {
  switch (action.type) {
    case PageActionTypes.SELECT_COMPONENT:
      console.log('select component', action.payload);
      return {
        ...state,
        activeComponent: action.payload['@id'],
      };
    case PageActionTypes.ADD_COMPONENT:
      return {
        ...state,
        components: { ...state.components, [action.payload['@id']]: action.payload }
      };
    case PageActionTypes.DELETE_COMPONENT:
      // First we have to find the object being deleted, here named 'theOne'.
      // 'components' is an object with all components EXCEPT the one we will remove.

      // The idea is to remove 'theOne' from the components object and stitch the
      // object together linking it's children to it's parent.
      const { [action.payload['@id']]: theOne, ...components } = state.components;
      // Now, we have to get references to it's parent...
      const onesParent = components[theOne.parent];
      // ...and children
      const onesChildren = theOne.children;
      // set the parent of the component being deleted to the parent property of it's children
      onesChildren.forEach(c => c.parent = onesParent['@id']);
      // now remove change theOne's id for it's children id's inside the onesParent
      onesParent.children
        .splice(
          onesParent.children.indexOf(theOne['@id']),
          1,
          ...onesChildren
        );

      return {
        ...state,
        components
      };
    default:
      return { ...state };
  }
}
