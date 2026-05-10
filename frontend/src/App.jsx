import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import AddTask from "./components/addTask/AddTask.jsx";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <>
      <Header setShowAddTask={setShowAddTask} />
      <Dashboard />
      {showAddTask && <AddTask setShowAddTask={setShowAddTask} />}
    </>
  );
}

export default App;
