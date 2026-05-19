import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import searchReducer from "./searchReducer";
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  search: searchReducer,
  sort: sortReducer,
});

export default rootReducer;
