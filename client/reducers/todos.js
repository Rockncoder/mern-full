import {DELETE_TODO, ADD_TODO, TOGGLE_TODO, FLIP_TODO} from '../actions/Actions';

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });
    case FLIP_TODO:
      if (state.id !== action.id) {
        return state
      }

      const isUpperCase = state.text === state.text.toUpperCase();

      console.log(`${state.text} is ${isUpperCase}`);

      return Object.assign({}, state, {
        text: isUpperCase? state.text.toLowerCase(): state.text.toUpperCase()
      });

    default:
      return state
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    case DELETE_TODO:
      return state.filter(t => t.id !== action.id);
    case FLIP_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state
  }
};

export default todos;