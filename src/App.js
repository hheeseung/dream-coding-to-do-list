import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todo-list/TodoList";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
