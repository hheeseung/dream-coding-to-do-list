import { BsFillSunFill } from "react-icons/bs";
import styles from "./App.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./components/todo/Todo";
uuidv4();

const DEFAULT_TODOS = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const { register, handleSubmit, setValue } = useForm();
  const [todos, setTodos] = useState(DEFAULT_TODOS);

  const handleAdd = (data) => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    const defaultTodos = JSON.parse(localStorage.getItem("todos"));
    const newTodos = [
      ...defaultTodos,
      { id: uuidv4(), todo: data.todo, isDone: false },
    ];
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(JSON.parse(localStorage.getItem("todos")));
    setValue("todo", "");
  };

  const handleDelete = (id) => {
    const defaultTodos = JSON.parse(localStorage.getItem("todos"));
    const updatedTodos = defaultTodos.filter((value) => value.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setTodos(JSON.parse(localStorage.getItem("todos")));
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
              <Todo
                {...todo}
                key={todo.id}
                handleDelete={handleDelete}
                setTodos={setTodos}
              />
            ))}
          </ul>
        </main>
        <form className={styles.form} onSubmit={handleSubmit(handleAdd)}>
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
