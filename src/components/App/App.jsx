import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  setSearchQuery,
  setDebouncedQuery,
} from "../../store/actions";
import { TodoList } from "../TodoList/TodoList";
import styles from "./App.module.scss";
import { NewTodoForm } from "../NewTodoForm/NewTodoForm";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoSortToggle } from "../TodoSortToggle/TodoSortToggle";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.isLoading);
  const searchQuery = useSelector((state) => state.search.query);
  const debouncedQuery = useSelector((state) => state.search.debouncedQuery);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setDebouncedQuery(searchQuery.toLowerCase()));
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchQuery, dispatch]);

  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <h1 className={styles.header}>todoS redux</h1>
        <NewTodoForm />
        {isLoading ? (
          <div
            className={styles.loader}
            aria-label="Загрузка"
            role="status"
          ></div>
        ) : (
          <>
            <TodoList searchQuery={debouncedQuery} />
            <div className={styles.controlsRow}>
              <TodoSearch />
              <TodoSortToggle />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
