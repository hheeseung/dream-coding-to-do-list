import TodoList from "./components/todo-list/TodoList";
import styles from "./App.module.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
