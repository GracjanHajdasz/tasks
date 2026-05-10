import "./AddTask.css";
import axios from "axios";
import { useState } from "react";

export default function AddTask({ setShowAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAdd() {
    axios
      .post("http://127.0.0.1:8000/api/tasks", { title, description })
      .then((response) => {
        console.log(response);
      });
    setShowAddTask(false);
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
    </div>
  );
}
