import { BsFillTrashFill, BsCheckSquare, BsSquare } from "react-icons/bs";
import styles from "./Todo.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Todo({ id, todo, isDone, onUpdate, onDelete }) {
  const { isDark } = useContext(ThemeContext);

  const todoClasses = classNames(styles.todo, {
    [styles.dark]: isDark,
  });

  const iconClasses = classNames(styles["todo-icon"], {
    [styles.dark]: isDark,
  });

  const deleteClasses = classNames(styles["todo-delete"], {
    [styles.dark]: isDark,
  });

  return (
    <li className={todoClasses}>
      <div className={styles["todo-content"]}>
        <div onClick={() => onUpdate(id)} className={iconClasses}>
          {isDone ? <BsCheckSquare /> : <BsSquare />}
        </div>
        {isDone ? (
          <span className={styles["todo-text-done"]}>{todo}</span>
        ) : (
          <span className={styles["todo-text"]}>{todo}</span>
        )}
      </div>
      <button onClick={() => onDelete(id)} className={deleteClasses}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
