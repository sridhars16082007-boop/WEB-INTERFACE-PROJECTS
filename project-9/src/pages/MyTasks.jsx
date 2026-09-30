import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

function MyTasks() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );

    setTasks(saved);
  }, []);

  const updateTasks = (updated) => {
    setTasks(updated);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updated)
    );
  };

  const toggleTask = (id) => {

    const updated = tasks.map(task =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed
          }
        : task
    );

    updateTasks(updated);
  };

  const deleteTask = (id) => {

    const updated = tasks.filter(
      task => task.id !== id
    );

    updateTasks(updated);
  };

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const filteredTasks = tasks.filter(task => {

    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === "Pending")
      return !task.completed;

    if (filter === "Completed")
      return task.completed;

    if (filter === "Overdue")
      return (
        !task.completed &&
        task.date &&
        task.date < today
      );

    return true;
  });

  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>My Tasks</h1>
          <p>
            Manage all your tasks from one place.
          </p>
        </div>

      </div>

      <div className="task-toolbar">

        <div className="filter-buttons">

          {[
            "All",
            "Pending",
            "Completed",
            "Overdue"
          ].map(item => (
            <button
              key={item}
              className={
                filter === item
                  ? "filter-active"
                  : ""
              }
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}

        </div>

        <input
          className="search-input"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={e =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div>

        {filteredTasks.length === 0 ? (

          <div className="large-empty">
            <div>📋</div>
            <h2>No tasks found</h2>
            <p>
              Create a task to get started.
            </p>
          </div>

        ) : (

          filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))

        )}

      </div>

    </div>
  );
}

export default MyTasks;