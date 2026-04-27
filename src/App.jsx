import TaskList from "./components/task-list";

function App() {
  return (
    <div style={{ padding: "32px 16px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>📋 Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;
