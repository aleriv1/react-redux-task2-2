const API_URL = "http://localhost:3002/todos";

// --- plain action creators ---

export const setSearchQuery = (query) => ({
  type: "SET_SEARCH_QUERY",
  payload: query,
});

export const setDebouncedQuery = (query) => ({
  type: "SET_DEBOUNCED_QUERY",
  payload: query,
});

export const toggleSort = () => ({ type: "TOGGLE_SORT" });

// --- thunks ---

export const fetchTodos = () => (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => dispatch({ type: "SET_TODOS", payload: data }))
    .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
};

export const addNewTodo = (label) => (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      id: Date.now(),
      todoLabel: label,
      editing: false,
      completed: false,
    }),
  })
    .then((response) => response.json())
    .then((data) => dispatch({ type: "ADD_TODO", payload: data }))
    .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
};

export const editTodo = (id, editingState) => (dispatch) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ editing: editingState }),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "UPDATE_TODO",
        payload: { id: data.id, updates: { editing: data.editing } },
      }),
    );
};

export const changeTodoLabel = (id, label) => (dispatch) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ todoLabel: label, editing: false }),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          id: data.id,
          updates: { todoLabel: data.todoLabel, editing: data.editing },
        },
      }),
    );
};

export const deleteTodo = (id) => (dispatch) => {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then(() => dispatch({ type: "DELETE_TODO", payload: id }));
};
