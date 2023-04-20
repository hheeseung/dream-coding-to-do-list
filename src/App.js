import { BsFillSunFill, BsFillTrashFill } from "react-icons/bs";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.todolist}>
        <nav className={styles.navbar}>
          <div className={styles.theme}>
            <BsFillSunFill />
          </div>
          <div className={styles.category}>
            <span className={styles.details}>All</span>
            <span className={styles.details}>In Progress</span>
            <span className={styles.details}>Done</span>
          </div>
        </nav>
        <main className={styles.todos}>
          <ul className={styles.todo}>
            <li className={styles.todoDetail}>
              <div className={styles.todoTitle}>
                <input type="checkbox" />
                <span>React.js 공부하기</span>
              </div>
              <button className={styles.todoDelete}>
                <BsFillTrashFill />
              </button>
            </li>
            <li className={styles.todoDetail}>
              <div className={styles.todoTitle}>
                <input type="checkbox" />
                <span>운동하기</span>
              </div>
              <button className={styles.todoDelete}>
                <BsFillTrashFill />
              </button>
            </li>
          </ul>
        </main>
        <form className={styles.form}>
          <input type="text" placeholder="Add To Do" className={styles.input} />
          <button className={styles.addBtn}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
