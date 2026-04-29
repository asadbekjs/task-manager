import TaskItem from "./task-item";

const MOCK_TASKS = [
  { id: 1, title: "React komponentlar", priority: "high", isDone: true },
  { id: 2, title: "Props va Children", priority: "high", isDone: false },
  { id: 3, title: "Loyiha strukturasi", priority: "medium", isDone: false },
  { id: 4, title: "README yozish", priority: "low", isDone: false },
];

function TaskList() {
  const doneCount = MOCK_TASKS.filter((t) => t.isDone).length;
  const totalCount = MOCK_TASKS.length;

  const handleToggle = (id) => {
    console.log("Toggle:", id);
  };
  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <p style={{ color: "#6b7280", marginBottom: 12 }}>
        {doneCount}/{totalCount} vazifa bajarildi
      </p>
      {MOCK_TASKS.map((task) => {
        return (
          <TaskItem
            key={task.id}
            {...task} // {spread pattern}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
