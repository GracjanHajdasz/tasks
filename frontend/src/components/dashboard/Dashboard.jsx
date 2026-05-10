import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="todo">
        <h2>do zrobienia</h2>
      </div>
      <div className="in-progress">
        <h2>W trakcie</h2>
      </div>
      <div className="done">
        <h2>gotowe</h2>
      </div>
    </div>
  );
}
