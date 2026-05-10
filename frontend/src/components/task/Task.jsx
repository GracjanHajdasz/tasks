import "./Task.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

export default function Task({
  id,
  title,
  description,
  status,
  createdAt,
  onStatusChange,
}) {
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    axios
      .patch(`http://localhost:8000/api/tasks/${id}`, { status: newStatus })
      .then(() => onStatusChange())
      .catch((err) => console.error("Błąd zmiany statusu:", err));
  };

  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <label htmlFor="task-status">Status:</label>
        <select
          name="task-status"
          defaultValue={status}
          onChange={handleStatusChange}
        >
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
