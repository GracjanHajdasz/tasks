import "./Task.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import EditTask from "../editTask/EditTask.jsx";

export default function Task({
  id,
  title,
  description,
  status,
  createdAt,
  fetchTasks,
}) {
  const [showEditTask, setShowEditTask] = useState(false);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    axios
      .patch(`http://localhost:8000/api/tasks/${id}`, { status: newStatus })
      .then(() => fetchTasks())
      .catch((err) => console.error("Błąd zmiany statusu:", err));
  };

  function deleteTask() {
    axios
      .delete(`http://localhost:8000/api/tasks/${id}`)
      .then(() => fetchTasks())
      .catch((err) => console.error(err));
  }

  const createdDate = new Date(createdAt);
  const formattedCreatedAt = Number.isNaN(createdDate.getTime())
    ? createdAt
    : `${createdDate.getDate().toString().padStart(2, "0")}.${(
        createdDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${createdDate.getFullYear()} ${createdDate
        .getHours()
        .toString()
        .padStart(
          2,
          "0",
        )}:${createdDate.getMinutes().toString().padStart(2, "0")}`;

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
        <p>Data utworzenia: {formattedCreatedAt}</p>
        <div className="task-icons">
          <FaPencilAlt onClick={() => setShowEditTask(true)} />
          <FaRegTrashAlt onClick={deleteTask} />
        </div>
      </div>
      {showEditTask && (
        <EditTask
          id={id}
          title={title}
          description={description}
          status={status}
          setShowEditTask={setShowEditTask}
          fetchTasks={fetchTasks}
        />
      )}
    </div>
  );
}
