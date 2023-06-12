import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

export default function Navbar({ setFilter }) {
  const { isDark, changeTheme } = useContext(ThemeContext);

  const handleFilter = (filter) => setFilter(filter);

  return (
    <nav>
      <div onClick={changeTheme}>
        {isDark ? <BsFillSunFill /> : <BsMoonFill />}
      </div>
      <div>
        <span onClick={() => handleFilter("all")} className={styles.details}>
          All
        </span>
        <span
          onClick={() => handleFilter("inProgress")}
          className={styles.details}
        >
          In Progress
        </span>
        <span onClick={() => handleFilter("done")} className={styles.details}>
          Done
        </span>
      </div>
    </nav>
  );
}
