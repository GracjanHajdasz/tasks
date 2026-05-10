import "./Dashboard.css";
import Task from "../task/Task.jsx";

export default function Dashboard({ tasks, fetchTasks }) {
  const renderTasks = (status) =>
    tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <tr key={task.id}>
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            createdAt={task.created_at}
            fetchTasks={fetchTasks}
          />
        </tr>
      ));

  return (
    <div className="dashboard">
      <table className="todo">
        <th>
          <h2>Do zrobienia</h2>
        </th>
        {renderTasks("todo")}
      </table>
      <table className="in-progress">
        <th>
          <h2>W trakcie</h2>
        </th>
        {renderTasks("in_progress")}
      </table>
      <table className="done">
        <th>
          <h2>Gotowe</h2>
        </th>
        {renderTasks("done")}
      </table>
    </div>
  );
}
