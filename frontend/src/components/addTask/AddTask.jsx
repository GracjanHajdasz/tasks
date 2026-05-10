import "./AddTask.css";
import axios from "axios";
import { use, useEffect, useState } from "react";

export default function AddTask({ setShowAddTask, fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (title.length === 0) setIsTitleEmpty(true);
    else {
      setIsTitleEmpty(false);
      setShowAlert(false);
    }
  }, [title]);

  function handleAdd() {
    if (isTitleEmpty) setShowAlert(true);
    else {
      axios
        .post("http://127.0.0.1:8000/api/tasks", { title, description })
        .then((response) => {
          console.log(response);
          fetchTasks();
        });
      setShowAddTask(false);
    }
  }

  return (
    <div className="add-task">
      <p>Tytuł</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>opis</p>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>Potwierdz</button>
      {showAlert && <p>tytuł nie może byc pusty!</p>}
    </div>
  );
}
