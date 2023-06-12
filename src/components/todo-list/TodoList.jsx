import { v4 as uuidv4 } from "uuid";
import Todo from "../todo/Todo";
import TodoAddForm from "../todo-add-form/TodoAddForm";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

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

  return (
    <>
      <main>
        <ul>
          {todos.map((todo) => (
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
