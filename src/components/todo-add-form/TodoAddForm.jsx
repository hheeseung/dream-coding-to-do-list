import { useState } from "react";

export default function TodoAddForm({ onAdd }) {
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(todo);
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add To Do"
        value={todo}
        name="todo"
        onChange={onChange}
      />
      <button>Add</button>
    </form>
  );
}
