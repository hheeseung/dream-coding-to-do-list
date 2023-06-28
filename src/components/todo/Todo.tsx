import styles from "./Todo.module.css";
import { BsCheckSquare, BsSquare } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TaskBadge from "../task-badge/TaskBadge";

interface IToDo {
  id: string;
  todo: string;
  isDone: boolean;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Todo({ id, todo, isDone, onUpdate, onDelete }: IToDo) {
  return (
    <li className={styles.container}>
      <div className={styles.todo}>
        <p>{todo}</p>
        <div className={styles.status}>
          <TaskBadge isDone={isDone} text={isDone ? "Finished" : "To Do"} />
          <span className={styles.delete} onClick={() => onDelete(id)}>
            <AiOutlineCloseCircle />
          </span>
        </div>
      </div>
      <span className={styles.check} onClick={() => onUpdate(id)}>
        {isDone ? <BsCheckSquare /> : <BsSquare />}
      </span>
    </li>
  );
}
