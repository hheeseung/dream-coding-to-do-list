import classNames from "classnames";
import styles from "./TaskBadge.module.css";

interface BadgeText {
  text: string;
  isDone: boolean;
}

export default function TaskBadge({ text, isDone }: BadgeText) {
  const badgeClasses = classNames(styles.badge, {
    [styles.isDone]: isDone,
  });

  return <span className={badgeClasses}>{text}</span>;
}
