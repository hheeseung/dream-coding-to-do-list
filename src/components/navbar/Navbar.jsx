import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

export default function Navbar({ todos, setFilteredTodos, changeTheme }) {
  const { isDark } = useContext(ThemeContext);

  const onFilter = (filter) => {
    switch (filter) {
      case "all":
        return setFilteredTodos(todos);
      case "inProgress":
        return setFilteredTodos(todos.filter((item) => !item.isDone));
      case "done":
        return setFilteredTodos(todos.filter((item) => item.isDone));
      default:
        return setFilteredTodos(todos);
    }
  };

  return (
    <nav className={isDark ? styles.dark__navbar : styles.navbar}>
      <div
        className={isDark ? styles.dark__theme : styles.theme}
        onClick={() => changeTheme()}
      >
        {isDark ? <BsFillSunFill /> : <BsMoonFill />}
      </div>
      <div className={isDark ? styles.dark__category : styles.category}>
        <span className={styles.details} onClick={() => onFilter("all")}>
          All
        </span>
        <span className={styles.details} onClick={() => onFilter("inProgress")}>
          In Progress
        </span>
        <span className={styles.details} onClick={() => onFilter("done")}>
          Done
        </span>
      </div>
    </nav>
  );
}
