import TodoList from "./components/todo-list/TodoList";
import styles from "./App.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isDark } = useContext(ThemeContext);

  const wrapperClasses = classNames(styles.wrapper, {
    [styles.dark]: isDark,
  });
  return (
    <div className={wrapperClasses}>
      <TodoList />
    </div>
  );
}

export default App;
