import "./Dashboard.css";
import Task from "../task/Task.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/tasks").then((response) => {
      setTasks(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <table className="todo">
        <th>
          <h2>Do zrobienia</h2>
        </th>
        {tasks.map(
          (task) =>
            task.status == "todo" && (
              <tr>
                <Task
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  createdAt={task.created_at}
                />
              </tr>
            ),
        )}
      </table>
      <table className="in-progress">
        <th>
          <h2>W trakcie</h2>
        </th>
        {tasks.map(
          (task) =>
            task.status == "in_progress" && (
              <tr>
                <Task
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  createdAt={task.created_at}
                />
              </tr>
            ),
        )}
      </table>
      <table className="done">
        <th>
          <h2>Gotowe</h2>
        </th>
        {tasks.map(
          (task) =>
            task.status == "done" && (
              <tr>
                <Task
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  createdAt={task.created_at}
                />
              </tr>
            ),
        )}
      </table>
    </div>
  );
}
