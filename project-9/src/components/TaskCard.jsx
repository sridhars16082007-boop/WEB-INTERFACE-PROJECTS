function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>

      <div className="task-check">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      </div>

      <div className="task-content">
        <h3>{task.title}</h3>

        {task.description && (
          <p>{task.description}</p>
        )}

        <div className="task-meta">
          <span>📅 {task.date || "No date"}</span>
          <span>⏰ {task.time || "No time"}</span>

          <span className={`priority ${task.priority?.toLowerCase()}`}>
            {task.priority}
          </span>

          <span className="category">
            {task.category}
          </span>
        </div>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default TaskCard;