import styles from "./Header.module.css";
import { RxAvatar } from "react-icons/rx";

export default function Header() {
  const today = new Date().toISOString().substring(0, 10).replaceAll("-", ".");

  return (
    <header className={styles.header}>
      <div className={styles.metadata}>
        <span>{today}</span>
        <span>
          <RxAvatar className={styles.avatar} />
        </span>
      </div>
      <div>
        <h1 className={styles.title}>오늘의 할 일</h1>
      </div>
    </header>
  );
}
