const initialState = {
  items: [],
  isLoading: false,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, items: action.payload };
    case "ADD_TODO":
      return { ...state, items: [...state.items, action.payload] };
    case "UPDATE_TODO":
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.updates }
            : todo,
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
