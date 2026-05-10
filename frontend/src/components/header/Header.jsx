import "./Header.css";

export default function Header({ setShowAddTask }) {
  return (
    <div className="header">
      <h1>Task manager</h1>
      <button onClick={() => setShowAddTask(true)} className="add-task-button">
        Dodaj zadanie
      </button>
    </div>
  );
}
