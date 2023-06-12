import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";
import classNames from "classnames";

export default function Navbar({ setFilter }) {
  const { isDark, changeTheme } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  const navbarClasses = classNames(styles.navbar, {
    [styles.dark]: isDark,
  });

  return (
    <nav className={navbarClasses}>
      <div className={styles.theme} onClick={changeTheme}>
        {isDark ? <BsFillSunFill /> : <BsMoonFill />}
      </div>
      <div className={styles.category}>
        <span
          onClick={() => handleFilter("all")}
          className={classNames(styles.details, {
            [styles.active]: activeFilter === "all",
          })}
        >
          All
        </span>
        <span
          onClick={() => handleFilter("inProgress")}
          className={classNames(styles.details, {
            [styles.active]: activeFilter === "inProgress",
          })}
        >
          In Progress
        </span>
        <span
          onClick={() => handleFilter("done")}
          className={classNames(styles.details, {
            [styles.active]: activeFilter === "done",
          })}
        >
          Done
        </span>
      </div>
    </nav>
  );
}
