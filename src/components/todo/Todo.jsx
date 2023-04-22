import { BsFillTrashFill, BsCheckSquare, BsSquare } from "react-icons/bs";
import styles from "./Todo.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Todo({ id, todo, isDone, setTodos }) {
  const { isDark } = useContext(ThemeContext);

  const handleCheck = (id) => {
    const defaultTodos = JSON.parse(localStorage.getItem("todos"));
    const updatedTodos = defaultTodos.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  const handleDelete = (id) => {
    const defaultTodos = JSON.parse(localStorage.getItem("todos"));
    const updatedTodos = defaultTodos.filter((value) => value.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
