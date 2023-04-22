import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ id, todo, handleDelete }) {
  return (
    <li className={styles.todoDetail}>
      <div className={styles.todoTitle}>
        <input type="checkbox" />
        <span>{todo}</span>
      </div>
      <button className={styles.deleteToDo} onClick={() => handleDelete(id)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
