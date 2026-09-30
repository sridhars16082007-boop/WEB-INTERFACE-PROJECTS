import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTask() {

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    priority: "Medium",
    category: "College",
    reminder: "None",
    completed: false
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title.trim()) {
      alert("Please enter a task name.");
      return;
    }

    const oldTasks = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );

    const newTask = {
      ...task,
      id: Date.now()
    };

    localStorage.setItem(
      "tasks",
      JSON.stringify([...oldTasks, newTask])
    );

    navigate("/tasks");
  };

  return (
    <div className="page form-page">

      <div className="page-title">
        <h1>Create Task</h1>
        <p>
          Add a new task to your productivity list.
        </p>
      </div>

      <form
        className="task-form"
        onSubmit={handleSubmit}
      >

        <label>
          Task Name
          <input
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Complete React Assignment"
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Add task description..."
          />
        </label>

        <div className="form-row">

          <label>
            Due Date
            <input
              type="date"
              name="date"
              value={task.date}
              onChange={handleChange}
            />
          </label>

          <label>
            Due Time
            <input
              type="time"
              name="time"
              value={task.time}
              onChange={handleChange}
            />
          </label>

        </div>

        <div className="form-row">

          <label>
            Priority
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </label>

          <label>
            Category
            <select
              name="category"
              value={task.category}
              onChange={handleChange}
            >
              <option>College</option>
              <option>Personal</option>
              <option>Work</option>
              <option>Other</option>
            </select>
          </label>

        </div>

        <label>
          Reminder
          <select
            name="reminder"
            value={task.reminder}
            onChange={handleChange}
          >
            <option>None</option>
            <option>10 minutes before</option>
            <option>30 minutes before</option>
            <option>1 hour before</option>
            <option>1 day before</option>
          </select>
        </label>

        <div className="form-buttons">

          <button
            type="button"
            className="secondary-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="primary-btn"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  );
}

export default CreateTask;