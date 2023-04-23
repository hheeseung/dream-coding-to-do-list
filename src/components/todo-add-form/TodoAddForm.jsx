import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoAddForm.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

uuidv4();

export default function TodoAddForm({ todos, setTodos, setFilteredTodos }) {
  const { isDark } = useContext(ThemeContext);

  const { register, handleSubmit, setValue } = useForm();
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
    setFilteredTodos(newTodos);
    setTodos(JSON.parse(localStorage.getItem("todos")));
    setValue("todo", "");
  };

  return (
    <form
      className={isDark ? styles.dark__form : styles.form}
      onSubmit={handleSubmit(handleAdd)}
    >
      <input
        type="text"
        placeholder="Add To Do"
        className={styles.input}
        {...register("todo", { required: true })}
      />
      <button className={isDark ? styles.dark__addToDo : styles.addToDo}>
        Add
      </button>
    </form>
  );
}
