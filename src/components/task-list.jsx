import TaskItem from "./task-item";

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            onToggle={onToggle}
            onDelete={onDelete}
            task={task}
            // {...task} // {spread pattern}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
