import styles from "./App.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todo-list/TodoList";
import TodoAddForm from "./components/todo-add-form/TodoAddForm";

const DEFAULT_TODOS = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  const { isDark, changeTheme } = useContext(ThemeContext);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  return (
    <>
      <div className={isDark ? styles.dark__wrapper : styles.wrapper}>
        <div className={styles.todolist}>
          <Navbar
            changeTheme={changeTheme}
            todos={todos}
            setFilteredTodos={setFilteredTodos}
          />
          <TodoList
            setTodos={setTodos}
            setFilteredTodos={setFilteredTodos}
            filteredTodos={filteredTodos}
          />
          <TodoAddForm
            todos={todos}
            setTodos={setTodos}
            setFilteredTodos={setFilteredTodos}
          />
        </div>
      </div>
    </>
  );
}

export default App;
