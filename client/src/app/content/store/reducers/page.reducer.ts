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
      return {
        ...state,
        activeComponent: action.payload,
      };
    case PageActionTypes.UPDATE_COMPONENT:
      return {
        ...state,
        components: { ...state.components, [state.activeComponent]: action.payload }
      };
    case PageActionTypes.CHOOSE_COMPONENT:
      // Select the active component from the components list
      const active = state.components[state.activeComponent];
      // Add the newly created component id to it's children list
      active.children.push(action.payload['@id']);
      // Ensure the active component's id is set in the newly created component
      action.payload.parent = active['@id'];
      console.log('action.payload', action.payload);
      return {
        ...state,
        components: { ...state.components, [action.payload['@id']]: action.payload }
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
      const { [action.payload]: theOne, ...components } = state.components;
      // Now, we have to get references to it's parent...
      const onesParent = components[theOne.parent];
      // ...and children
      const onesChildren = theOne.children;
      // set the parent of the component being deleted to the parent property of it's children
      onesChildren.forEach(c => components[c].parent = onesParent['@id']);
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
