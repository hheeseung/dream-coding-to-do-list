import { BsFillTrashFill, BsCheckSquare, BsSquare } from "react-icons/bs";

export default function Todo({ id, todo, isDone, onUpdate, onDelete }) {
  return (
    <>
      <li style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div onClick={() => onUpdate(id)}>
            {isDone ? <BsCheckSquare /> : <BsSquare />}
          </div>
          <span>{todo}</span>
        </div>
        <button onClick={() => onDelete(id)}>
          <BsFillTrashFill />
        </button>
      </li>
    </>
  );
}
