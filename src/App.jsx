import { useState } from "react";
import AddTaskForm from "./components/add-task-form";
import StatsBar from "./components/stats-bar";
import TaskList from "./components/task-list";
import FilterBar from "./components/filter-bar";

const INITIAL_TASKS = [
  { id: 1, title: "React komponentlar", priority: "high", isDone: true },
  { id: 2, title: "Props va Children", priority: "high", isDone: false },
  { id: 3, title: "Loyiha strukturasi", priority: "medium", isDone: false },
  { id: 4, title: "README yozish", priority: "low", isDone: false },
];

function App() {
  // ✅ Global state — bir necha komponent ishlatadi
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Derived state
  const filteredTasks = tasks
    .filter((task) =>
      filter === "all"
        ? true
        : filter === "active"
          ? !task.isDone
          : task.isDone,
    )
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));

  const doneCount = tasks.filter((task) => task.isDone).length;
  const totalCount = tasks.length;

  const handleAdd = ({ title, priority }) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title, // title: title
        priority,
        isDone: false,
      },
    ]);
  };

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
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        display: "flex",
        justifyContent: "center",
        padding: "40px 16px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          background: "#fff",
          borderRadius: 16,
          padding: 28,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          alignSelf: "flex-start",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#1e293b", marginBottom: 24 }}>
          📋 Task Manager
        </h1>

        <StatsBar total={totalCount} done={doneCount} />

        <AddTaskForm onAdd={handleAdd} />

        <FilterBar
          search={search}
          onSearch={setSearch}
          filter={filter}
          onFilter={setFilter}
        />

        {filteredTasks.length === 0 ? (
          <p
            style={{ textAlign: "center", color: "#9ca3af", padding: "32px 0" }}
          >
            {search
              ? `"${search}" bo'yicha hech narsa topilmadi 🔍`
              : "Vazifalar mavjud emas"}
          </p>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </div>
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
