import { useState } from "react";
import AddTaskForm from "./components/add-task-form";
import StatsBar from "./components/stats-bar";
import TaskList from "./components/task-list";

const INITIAL_TASKS = [
  { id: 1, title: "React komponentlar", priority: "high", isDone: true },
  { id: 2, title: "Props va Children", priority: "high", isDone: false },
  { id: 3, title: "Loyiha strukturasi", priority: "medium", isDone: false },
  { id: 4, title: "README yozish", priority: "low", isDone: false },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleToggle = (id) => {
    // console.log("Toggle:", id);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };
  const handleDelete = (id) => {
    // console.log("Delete:", id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "32px 16px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>📋 Task Manager</h1>
      <StatsBar />
      <AddTaskForm />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;

// App
// Header
// StatsBar
// AddTaskForm
// TaskList (tasks)
//   TaskItem
//   TaskItem
