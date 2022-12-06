// Action value
const ADD_TODO = "ADD_TODO";
const DELETE = "DELETE_TODO";
const TOGGLE = "TOGGLE";
// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delete_todo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const isDone_toggle = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};

// initial State
const initialState = [];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE:
      return [...state.filter((todo) => todo.id !== action.id)];

    case TOGGLE:
      return [
        ...state.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      ];

    default:
      return state;
  }
};

export default todos;
