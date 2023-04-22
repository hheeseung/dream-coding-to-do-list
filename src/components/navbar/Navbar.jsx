import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

export default function Navbar({ changeTheme }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <nav className={isDark ? styles.dark__navbar : styles.navbar}>
      <div
        className={isDark ? styles.dark__theme : styles.theme}
        onClick={() => changeTheme()}
      >
        {isDark ? <BsFillSunFill /> : <BsMoonFill />}
      </div>
      <div className={isDark ? styles.dark__category : styles.category}>
        <span className={styles.details}>All</span>
        <span className={styles.details}>In Progress</span>
        <span className={styles.details}>Done</span>
      </div>
    </nav>
  );
}
