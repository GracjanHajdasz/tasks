import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import AddTask from "./components/addTask/AddTask.jsx";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios.get("http://localhost:8000/api/tasks").then((response) => {
      setTasks(response.data);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Header setShowAddTask={setShowAddTask} />
      <Dashboard fetchTasks={fetchTasks} tasks={tasks} />
      {showAddTask && (
        <AddTask setShowAddTask={setShowAddTask} fetchTasks={fetchTasks} />
      )}
    </>
  );
}

export default App;
