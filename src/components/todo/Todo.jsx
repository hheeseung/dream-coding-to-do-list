import {
  BsFillTrashFill,
  BsFillCheckSquareFill,
  BsSquareFill,
} from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ id, todo, isDone, handleDelete, setTodos }) {
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

  return (
    <li className={styles.todoDetail}>
      <div className={styles.todoTitle}>
        <div className={styles.checkbox} onClick={() => handleCheck(id)}>
          {isDone ? <BsFillCheckSquareFill /> : <BsSquareFill />}
        </div>
        <span className={isDone ? styles.checked : ""}>{todo}</span>
      </div>
      <button className={styles.deleteToDo} onClick={() => handleDelete(id)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
