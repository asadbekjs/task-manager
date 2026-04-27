import TaskItem from "./task-item";

const MOCK_TASKS = [
  {
    id: 1,
    title: "React komponentlarni o'rganish",
    priority: "high",
    isDone: true,
  },
  {
    id: 2,
    title: "Loyiha strukturasini tuzish",
    priority: "medium",
    isDone: false,
  },
  { id: 3, title: "README yozish", priority: "low", isDone: false },
];

function TaskList() {
  const done = MOCK_TASKS.filter((task) => task.isDone).length;
  const total = MOCK_TASKS.length;

  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <p style={{ color: "#6b7280", marginBottom: 12 }}>
        {done}/{total} vazifa bajarildi
      </p>
      {MOCK_TASKS.map((task) => {
        return (
          <TaskItem
            key={task.id}
            title={task.title}
            priority={task.priority}
            isDone={task.isDone}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
