import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";

function Home() {

  const tasks = JSON.parse(
    localStorage.getItem("tasks") || "[]"
  );

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const total = tasks.length;

  const completed = tasks.filter(
    task => task.completed
  ).length;

  const pending = tasks.filter(
    task => !task.completed
  ).length;

  const overdue = tasks.filter(
    task =>
      !task.completed &&
      task.date &&
      task.date < today
  ).length;

  const todayTasks = tasks.filter(
    task => task.date === today
  );

  const importantTasks = tasks.filter(
    task =>
      task.priority === "High" &&
      !task.completed
  );

  return (
    <div className="page">

      <section className="welcome-card">

        <div>
          <span className="small-label">
            PRODUCTIVITY DASHBOARD
          </span>

          <h1>Welcome to TaskFlow 👋</h1>

          <p>
            Organize your tasks, manage your time,
            and stay productive.
          </p>
        </div>

        <Link
          to="/create"
          className="primary-btn"
        >
          + Create Task
        </Link>

      </section>

      <section className="stats-grid">

        <StatCard
          icon="📋"
          title="Total Tasks"
          value={total}
          color="blue"
        />

        <StatCard
          icon="⏳"
          title="Pending"
          value={pending}
          color="orange"
        />

        <StatCard
          icon="✓"
          title="Completed"
          value={completed}
          color="green"
        />

        <StatCard
          icon="⚠"
          title="Overdue"
          value={overdue}
          color="red"
        />

      </section>

      <section className="dashboard-grid">

        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Today's Tasks</h2>
              <p>Your tasks scheduled for today.</p>
            </div>

            <Link to="/tasks">
              View All
            </Link>
          </div>

          {todayTasks.length === 0 ? (
            <div className="empty-state">
              <div>📅</div>
              <h3>No tasks today</h3>
              <p>
                You have no tasks scheduled for today.
              </p>
            </div>
          ) : (
            todayTasks.map(task => (
              <div
                className="simple-task"
                key={task.id}
              >
                <span className="task-dot"></span>

                <div>
                  <strong>{task.title}</strong>
                  <small>
                    {task.time || "No time"}
                  </small>
                </div>
              </div>
            ))
          )}

        </div>


        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>⭐ Important Tasks</h2>
              <p>High priority tasks.</p>
            </div>

            <Link to="/tasks">
              View All
            </Link>
          </div>

          {importantTasks.length === 0 ? (
            <div className="empty-state">
              <div>⭐</div>
              <h3>No important tasks</h3>
              <p>
                You don't have any high priority tasks.
              </p>
            </div>
          ) : (
            importantTasks.slice(0, 5).map(task => (
              <div
                className="simple-task"
                key={task.id}
              >
                <span className="important-dot"></span>

                <div>
                  <strong>{task.title}</strong>
                  <small>
                    Due {task.date || "No date"}
                  </small>
                </div>
              </div>
            ))
          )}

        </div>

      </section>

      <section className="quick-actions">

        <Link to="/tasks">
          <span>📋</span>
          <strong>My Tasks</strong>
          <small>Manage all your tasks</small>
        </Link>

        <Link to="/calendar">
          <span>📅</span>
          <strong>Monthly Calendar</strong>
          <small>View tasks by date</small>
        </Link>

        <Link to="/statistics">
          <span>📊</span>
          <strong>Statistics</strong>
          <small>Track your productivity</small>
        </Link>

        <Link to="/settings">
          <span>⚙️</span>
          <strong>Settings</strong>
          <small>Customize TaskFlow</small>
        </Link>

      </section>

    </div>
  );
}

export default Home;