const initialState = {
  query: "",
  debouncedQuery: "",
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, query: action.payload };
    case "SET_DEBOUNCED_QUERY":
      return { ...state, debouncedQuery: action.payload };
    default:
      return state;
  }
}
