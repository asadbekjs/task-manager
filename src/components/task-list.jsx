import TaskItem from "./task-item";

function TaskList({ tasks, onToggle, onDelete }) {
  const doneCount = tasks.filter((t) => t.isDone).length;
  const totalCount = tasks.length;

  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <p style={{ color: "#6b7280", marginBottom: 12 }}>
        {doneCount}/{totalCount} vazifa bajarildi
      </p>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            {...task} // {spread pattern}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
