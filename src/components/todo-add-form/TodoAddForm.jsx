import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./TodoAddForm.module.css";
import classNames from "classnames";

export default function TodoAddForm({ onAdd }) {
  const { isDark } = useContext(ThemeContext);
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

  const formClasses = classNames(styles.form, {
    [styles.dark]: isDark,
  });

  const inputClasses = classNames(styles.input, {
    [styles.dark]: isDark,
  });

  const buttonClasses = classNames(styles.button, {
    [styles.dark]: isDark,
  });

  return (
    <form className={formClasses} onSubmit={onSubmit}>
      <input
        className={inputClasses}
        type="text"
        placeholder="Add To Do"
        value={todo}
        name="todo"
        onChange={onChange}
        required
      />
      <button className={buttonClasses}>Add</button>
    </form>
  );
}
