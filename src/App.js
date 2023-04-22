import styles from "./App.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todo-list/TodoList";
import TodoAddForm from "./components/todo-add-form/TodoAddForm";

const DEFAULT_TODOS = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  const { changeTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.dark__wrapper}>
        <div className={styles.todolist}>
          <Navbar changeTheme={changeTheme} />
          <TodoList todos={todos} setTodos={setTodos} />
          <TodoAddForm todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
