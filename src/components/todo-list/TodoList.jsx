import { v4 as uuidv4 } from "uuid";
import Todo from "../todo/Todo";
import TodoAddForm from "../todo-add-form/TodoAddForm";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

export default function TodoList() {
  const initialTodos = getInitialTodos();
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

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
  }, [todos]);

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

  return (
    <>
      <Navbar setFilter={setFilter} />
      <main>
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
    </>
  );
}

function getInitialTodos() {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
}
