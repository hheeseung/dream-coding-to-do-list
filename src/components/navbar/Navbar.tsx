import classNames from "classnames";
import { useState } from "react";
import styles from "./Navbar.module.css";

type Filter = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ setFilter }: Filter) {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter: string) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  return (
    <nav className={styles.navbar}>
      <span
        className={classNames(styles.category, {
          [styles.isActive]: activeFilter === "all",
        })}
        onClick={() => handleFilter("all")}
      >
        All Tasks
      </span>
      <span
        className={classNames(styles.category, {
          [styles.isActive]: activeFilter === "inProgress",
        })}
        onClick={() => handleFilter("inProgress")}
      >
        In Progress
      </span>
      <span
        className={classNames(styles.category, {
          [styles.isActive]: activeFilter === "done",
        })}
        onClick={() => handleFilter("done")}
      >
        Finished
      </span>
    </nav>
  );
}
