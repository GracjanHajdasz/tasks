import "./Task.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Task({ title, description, status, createdAt }) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <label htmlFor="task-status">Status:</label>
        <select name="task-status" value={status}>
          <option value="todo">Do zrobienia</option>
          <option value="in_progress">W trakcie</option>
          <option value="done">Gotowe</option>
        </select>
      </div>
      <div>
        <p>Data utworzenia: {createdAt}</p>
        <div className="task-icons">
          <FaPencilAlt />
          <FaRegTrashAlt />
        </div>
      </div>
    </div>
  );
}
