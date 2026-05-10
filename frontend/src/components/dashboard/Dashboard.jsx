import "./Dashboard.css";
import Task from "../task/Task.jsx";

export default function Dashboard({ tasks, fetchTasks }) {
  const renderTasks = (status) =>
    tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div key={task.id}>
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            createdAt={task.created_at}
            fetchTasks={fetchTasks}
          />
        </div>
      ));

  return (
    <div className="dashboard">
      <div className="todo column">
        <h2>Do zrobienia</h2>
        {renderTasks("todo")}
      </div>
      <div className="in-progress column">
        <h2>W trakcie</h2>
        {renderTasks("in_progress")}
      </div>
      <div className="done column">
        <h2>Gotowe</h2>
        {renderTasks("done")}
      </div>
    </div>
  );
}
