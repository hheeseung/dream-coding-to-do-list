import Navbar from "../navbar/Navbar";
import Todo from "../todo/Todo";
import styles from "./TodoList.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoAddForm from "../todo-add-form/TodoAddForm";

export interface IToDos {
  id: string;
  todo: string;
  isDone: boolean;
}

export default function TodoList() {
  const initialTodos = getInitialTodos();
  const [todos, setTodos] = useState<IToDos[]>(initialTodos);
  const [filter, setFilter] = useState("inProgress");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const onAdd = (todo: string) => {
    setTodos([...todos, { id: uuidv4(), todo, isDone: false }]);
  };

  const onUpdate = (id: string) => {
    setTodos((todolist) =>
      todolist.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  const onDelete = (id: string) => {
    setTodos((todolist) => todolist.filter((todo) => todo.id !== id));
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "inProgress":
        return !todo.isDone;
      case "done":
        return todo.isDone;
      default:
        return true;
    }
  });

  return (
    <section className={styles.todolist}>
      <Navbar setFilter={setFilter} />
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
      <button className={styles.add} onClick={togglePopup}>
        <AiOutlinePlus />
      </button>
      {showPopup ? (
        <TodoAddForm
          onAdd={onAdd}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      ) : null}
    </section>
  );
}

function getInitialTodos() {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
}
