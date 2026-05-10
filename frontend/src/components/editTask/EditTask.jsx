import "./EditTask.css";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EditTask({
  setShowEditTask,
  fetchTasks,
  id,
  title: initialTitle,
  description: initialDescription,
  status: initialStatus,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [status, setStatus] = useState(initialStatus);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (title.length === 0) setIsTitleEmpty(true);
    else {
      setIsTitleEmpty(false);
      setShowAlert(false);
    }
  }, [title]);

  function handleEdit() {
    if (isTitleEmpty) {
      setShowAlert(true);
    } else {
      axios
        .put(`http://localhost:8000/api/tasks/${id}`, {
          title,
          description,
          status,
        })
        .then(() => {
          fetchTasks();
          setShowEditTask(false);
        })
        .catch((err) => console.error("Błąd edycji:", err));
    }
  }

  return (
    <div className="add-task">
      <RxCross1 onClick={() => setShowEditTask(false)} />
      <p>Tytuł</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Opis</p>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <label htmlFor="task-status">Status:</label>
        <select
          name="task-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">Do zrobienia</option>
          <option value="in_progress">W trakcie</option>
          <option value="done">Gotowe</option>
        </select>
      </div>
      <button onClick={handleEdit}>Potwierdź</button>
      {showAlert && <p>Tytuł nie może być pusty!</p>}
    </div>
  );
}
