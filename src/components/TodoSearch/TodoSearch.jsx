import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../store/actions";
import styles from "./TodoSearch.module.scss";

export const TodoSearch = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);

  return (
    <label className={styles.wrapper}>
      <span className={styles.label}></span>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        placeholder="Найти задачу"
        className={styles.input}
      />
    </label>
  );
};
