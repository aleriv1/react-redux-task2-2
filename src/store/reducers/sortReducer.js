const initialState = {
  isSortEnabled: false,
};

export default function sortReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_SORT":
      return { ...state, isSortEnabled: !state.isSortEnabled };
    default:
      return state;
  }
}
