// src/components/TaskItem.jsx

function TaskItem({ task, onToggle, onDelete }) {
  const priorityColor = {
    high: "#fee2e2",
    medium: "#fef3c7",
    low: "#f0fdf4",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        background: task.isDone ? "#f9fafb" : "#fff",
        border: `1px solid ${task.isDone ? "#e5e7eb" : "#d1d5db"}`,
        borderLeft: `4px solid ${priorityColor[task.priority] ?? "#e5e7eb"}`,
        borderRadius: "10px",
        marginBottom: 8,
        transition: "all 0.2s",
      }}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggle?.(task.id)}
        style={{
          width: 18,
          height: 18,
          cursor: "pointer",
          accentColor: "#3b82f6",
        }}
      />

      {/* Task title */}
      <span
        style={{
          flex: 1,
          textDecoration: task.isDone ? "line-through" : "none",
          color: task.isDone ? "#9ca3af" : "#111827",
          fontSize: 15,
          transition: "all 0.2s",
        }}
      >
        {task.title}
      </span>

      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          padding: "3px 10px",
          borderRadius: 999,
          background: priorityColor[task.priority],
          color: "#374151",
        }}
      >
        {task.priority}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 16,
          opacity: 0.5,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.opacity = 1)}
        onMouseLeave={(e) => (e.target.style.opacity = 0.5)}
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;
