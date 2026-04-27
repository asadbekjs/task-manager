// src/components/TaskItem.jsx
import Badge from "./ui/badge";

function TaskItem({ title, priority, isDone }) {
  const priorityMap = {
    high: { type: "danger", label: "Yuqori" },
    medium: { type: "warning", label: "O'rta" },
    low: { type: "default", label: "Past" },
  };

  const { type, label } = priorityMap[priority] || priorityMap.low;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        background: isDone ? "#f9fafb" : "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        marginBottom: "8px",
        opacity: isDone ? 0.6 : 1,
      }}
    >
      <span>{isDone ? "✅" : "❌"}</span>
      <span
        style={{
          flex: 1,
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "#9ca3af" : "#111827",
        }}
      >
        {title}
      </span>
      <Badge type={type}>{label}</Badge>
    </div>
  );
}

export default TaskItem;
