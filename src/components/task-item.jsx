// src/components/TaskItem.jsx
import Badge from "./ui/badge";
import Button from "./ui/button";

function TaskItem({
  id,
  title,
  priority = "low",
  isDone = false,
  onToggle,
  onDelete,
}) {
  const priorityConfig = {
    high: { type: "danger", label: "Yuqori ⬆️" },
    medium: { type: "warning", label: "O'rta ➡️" },
    low: { type: "  ", label: "Past ⬇️" },
  };

  const { type, label } = priorityConfig[priority] ?? priorityConfig.low;

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
      }}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => onToggle?.(id)}
        style={{ width: 18, height: 18, cursor: "pointer" }}
      />

      {/* Task title */}
      <span
        style={{
          flex: 1,
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "#9ca3af" : "#111827",
          fontSize: 15,
        }}
      >
        {title}
      </span>

      {/* Badge */}
      <Badge type={type}>{label}</Badge>

      {/* Delete button */}
      <Button variant="ghost" size="sm" onClick={() => onDelete?.(id)}>
        🗑️
      </Button>
    </div>
  );
}

export default TaskItem;
