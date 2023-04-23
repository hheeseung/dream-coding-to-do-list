import { BsFillTrashFill, BsCheckSquare, BsSquare } from "react-icons/bs";
import styles from "./Todo.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Todo({
  id,
  todo,
  isDone,
  setTodos,
  filteredTodos,
  setFilteredTodos,
}) {
  const { isDark } = useContext(ThemeContext);

  const handleCheck = (id) => {
    const updatedTodos = filteredTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setFilteredTodos(updatedTodos);
    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  const handleDelete = (id) => {
    const defaultTodos = JSON.parse(localStorage.getItem("todos"));
    const updatedTodos = defaultTodos.filter((value) => value.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setFilteredTodos(updatedTodos);
    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  return (
    <>
      <li className={styles.todoDetail}>
        <div className={styles.todoTitle}>
          <div className={styles.checkbox} onClick={() => handleCheck(id)}>
            {isDone ? <BsCheckSquare /> : <BsSquare />}
          </div>
          <span className={isDone ? styles.checked : ""}>{todo}</span>
        </div>
        <button
          className={isDark ? styles.dark__deleteToDo : styles.deleteToDo}
          onClick={() => handleDelete(id)}
        >
          <BsFillTrashFill />
        </button>
      </li>
    </>
  );
}
