import { useContext } from "react";
import Todo from "../todo/Todo";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./TodoList.module.css";

export default function TodoList({
  handleDelete,
  setTodos,
  filteredTodos,
  setFilteredTodos,
}) {
  const { isDark } = useContext(ThemeContext);

  return (
    <main className={isDark ? styles.dark__todos : styles.todos}>
      <ul className={styles.todo}>
        {filteredTodos.map((todo) => (
          <Todo
            {...todo}
            key={todo.id}
            handleDelete={handleDelete}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            setFilteredTodos={setFilteredTodos}
          />
        ))}
      </ul>
    </main>
  );
}
