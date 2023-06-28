import { useState } from "react";
import styles from "./TodoAddForm.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface IToDoAdd {
  onAdd: (todo: string) => void;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoAddForm({
  onAdd,
  showPopup,
  setShowPopup,
}: IToDoAdd) {
  const [todo, setTodo] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTodo(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(todo);
    setTodo("");
    setShowPopup(!showPopup);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <span className={styles.exit}>
        <AiOutlineClose onClick={() => setShowPopup(!showPopup)} />
      </span>
      <h3 className={styles.title}>할 일 추가하기</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="할 일을 추가하세요."
        value={todo}
        name="todo"
        onChange={onChange}
        required
      />
      <button className={styles.addBtn}>추가하기</button>
    </form>
  );
}
