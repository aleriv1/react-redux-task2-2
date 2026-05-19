import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store/actions";
import styles from "./NewTodoForm.module.scss";

export const NewTodoForm = () => {
  const [todoLabel, setTodoLabel] = useState("");
  const dispatch = useDispatch();

  const onNewTodoLableChange = (e) => {
    setTodoLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmedLabel = todoLabel.trim();

    if (!trimmedLabel) {
      return;
    }

    dispatch(addNewTodo(trimmedLabel));
    setTodoLabel("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        value={todoLabel}
        onChange={onNewTodoLableChange}
        placeholder="Что нужно сделать?"
        className={styles.input}
      />
      <button className={styles.submit} type="submit" disabled={!todoLabel.trim()}>
        Добавить
      </button>
    </form>
  );
};
