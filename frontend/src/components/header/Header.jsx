import "./Header.css";
import { FaCheckCircle } from "react-icons/fa";

export default function Header({ setShowAddTask }) {
  return (
    <div className="header">
      <h1>
        <FaCheckCircle /> Task manager
      </h1>
      <button onClick={() => setShowAddTask(true)} className="add-task-button">
        Dodaj zadanie
      </button>
    </div>
  );
}
