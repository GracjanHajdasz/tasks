import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Tasks</h1>

      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}

export default App;
