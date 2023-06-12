import { v4 as uuidv4 } from "uuid";
import Todo from "../todo/Todo";
import TodoAddForm from "../todo-add-form/TodoAddForm";
import { useContext, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./TodoList.module.css";
import classNames from "classnames";

export default function TodoList() {
  const { isDark } = useContext(ThemeContext);
  const initialTodos = getInitialTodos();
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.getItem("theme");
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, [isDark]);

  const onAdd = (todo) => {
    setTodos([...todos, { id: uuidv4(), todo, isDone: false }]);
  };

  const onUpdate = (id) => {
    setTodos((todolist) =>
      todolist.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  const onDelete = (id) => {
    setTodos((todolist) => todolist.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [todos, isDark]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "inProgress") {
      return !todo.isDone;
    } else if (filter === "done") {
      return todo.isDone;
    }
    return true;
  });

  const containerClasses = classNames(styles.container, {
    [styles.dark]: isDark,
  });

  return (
    <div className={containerClasses}>
      <Navbar setFilter={setFilter} />
      <main className={styles.todolist}>
        <ul>
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              isDone={todo.isDone}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </main>
      <TodoAddForm todos={todos} setTodos={setTodos} onAdd={onAdd} />
    </div>
  );
}

function getInitialTodos() {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
}
