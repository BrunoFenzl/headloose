import { DynamicPageSchema, DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { PageActionTypes, PageAction } from '../actions';

const initialState: DynamicPageSchema = {
  _id: '',
  _type: 'Page',
  name: 'page',
  parent: null,
  children: [],
  components: {},
  activeComponent: null,
  attributes: {
    title: '',
    slug: '',
  }
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
    case PageActionTypes.ADD_COMPONENT:
      const newState = { ...state };
      // component where new components should be placed
      let futureParent: DynamicComponentSchema;

      if (action.payload.parentId) {
        // Select the component with specified id to be the parent.
        futureParent = newState.components[action.payload.parentId];
      } else if (newState.activeComponent) {
        // if no id given, select the current active component.
        futureParent = newState.components[newState.activeComponent];
      } else {
        // if no id specified and no component currently active,
        // fallback to the page as parent component.
        futureParent = newState; // the current page
      }

      // Create new entry in the 'components' object
      newState.components[action.payload.component._id] = action.payload.component;
      // Save reference to the parent in this component
      action.payload.component.parent = futureParent._id;
      // And add this component to it's parent's children array
      futureParent.children.push(action.payload.component._id);
      return {
        ...newState,
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
      const onesChildren = theOne.children || [];
      // set the parent of the component being deleted to the parent property of it's children
      onesChildren.forEach(c => components[c].parent = onesParent._id);
      // now remove change theOne's id for it's children id's inside the onesParent
      onesParent.children
        .splice(
          onesParent.children.indexOf(theOne._id),
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
