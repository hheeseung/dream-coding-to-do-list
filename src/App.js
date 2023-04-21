import { BsFillSunFill, BsFillTrashFill } from "react-icons/bs";
import styles from "./App.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const todoList = [
  {
    id: 1,
    todo: "React.js 공부하기",
    isDone: false,
  },
  {
    id: 2,
    todo: "운동하기",
    isDone: false,
  },
];

function App() {
  const { register, handleSubmit, setValue } = useForm();
  const [todos, setTodos] = useState(todoList);

  const onValid = (data) => {
    setTodos((todo) => {
      const newTodos = [
        ...todo,
        { id: todo.length + 1, todo: data.todo, isDone: false },
      ];
      return newTodos;
    });
    setValue("todo", "");
  };

  const handleDelete = (id) => {
    setTodos((todo) => todo.filter((value) => value.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.todolist}>
        <nav className={styles.navbar}>
          <div className={styles.theme}>
            <BsFillSunFill />
          </div>
          <div className={styles.category}>
            <span className={styles.details}>All</span>
            <span className={styles.details}>In Progress</span>
            <span className={styles.details}>Done</span>
          </div>
        </nav>
        <main className={styles.todos}>
          <ul className={styles.todo}>
            {todos.map((todo) => (
              <li key={todo.id} className={styles.todoDetail}>
                <div className={styles.todoTitle}>
                  <input type="checkbox" />
                  <span>{todo.todo}</span>
                </div>
                <button
                  className={styles.deleteToDo}
                  onClick={() => handleDelete(todo.id)}
                >
                  <BsFillTrashFill />
                </button>
              </li>
            ))}
          </ul>
        </main>
        <form className={styles.form} onSubmit={handleSubmit(onValid)}>
          <input
            type="text"
            placeholder="Add To Do"
            className={styles.input}
            {...register("todo")}
          />
          <button className={styles.addToDo}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
