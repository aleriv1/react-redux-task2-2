const { writeFileSync } = require("fs");

const content = [
  'import { Todo } from "../Todo/Todo";',
  'import styles from "./TodoList.module.scss";',
  'import { useSelector } from "react-redux";',
  '',
  'export const TodoList = ({ searchQuery }) => {',
  '  const todos = useSelector((state) => state.todos.items);',
  '  const isSortEnabled = useSelector((state) => state.sort.isSortEnabled);',
  '',
  '  const filtered = todos.filter(({ todoLabel }) => {',
  '    return todoLabel.toLowerCase().includes(searchQuery);',
  '  });',
  '',
  '  const prepared = isSortEnabled',
  '    ? [...filtered].sort((a, b) => a.todoLabel.localeCompare(b.todoLabel))',
  '    : filtered;',
  '',
  '  return prepared.length ? (',
  '    <ul className={styles.list}>',
  '      {prepared.map((todo) => (',
  '        <Todo key={todo.id} {...todo} />',
  '      ))}',
  '    </ul>',
  '  ) : (',
  '    <p className={styles.empty}>Ничего не найдено.</p>',
  '  );',
  '};',
  '',
].join("\n");

writeFileSync("src/components/TodoList/TodoList.jsx", content, "utf8");
console.log("Done TodoList");
