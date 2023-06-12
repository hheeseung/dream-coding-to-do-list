import { BsFillTrashFill, BsCheckSquare, BsSquare } from "react-icons/bs";

export default function Todo({ id, todo, isDone, onUpdate, onDelete }) {
  return (
    <li>
      <div>
        <div onClick={() => onUpdate(id)}>
          {isDone ? <BsCheckSquare /> : <BsSquare />}
        </div>
        <span>{todo}</span>
      </div>
      <button onClick={() => onDelete(id)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
