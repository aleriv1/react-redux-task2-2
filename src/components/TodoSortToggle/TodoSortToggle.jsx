import { useDispatch, useSelector } from "react-redux";
import { toggleSort } from "../../store/actions";
import styles from "./TodoSortToggle.module.scss";

export const TodoSortToggle = () => {
  const dispatch = useDispatch();
  const isSortEnabled = useSelector((state) => state.sort.isSortEnabled);

  return (
    <button
      type="button"
      className={`${styles.button} ${
        isSortEnabled ? styles.buttonActive : ""
      }`}
      onClick={() => dispatch(toggleSort())}
    >
      {isSortEnabled ? "Сортировка А→Я" : "Без сортировки"}
    </button>
  );
};
