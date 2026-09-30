import StatCard from "../components/StatCard";

function Statistics() {

  const tasks = JSON.parse(
    localStorage.getItem("tasks") || "[]"
  );

  const completed =
    tasks.filter(task => task.completed).length;

  const pending = tasks.length - completed;

  const percentage =
    tasks.length === 0
      ? 0
      : Math.round(
          (completed / tasks.length) * 100
        );

  const categories = [
    "College",
    "Personal",
    "Work",
    "Other"
  ];

  const priorities = [
    "High",
    "Medium",
    "Low"
  ];

  return (
    <div className="page">

      <div className="page-title">
        <h1>Statistics</h1>
        <p>
          Track your productivity and task progress.
        </p>
      </div>

      <div className="stats-grid">

        <StatCard
          icon="📋"
          title="Total Tasks"
          value={tasks.length}
          color="blue"
        />

        <StatCard
          icon="✓"
          title="Completed"
          value={completed}
          color="green"
        />

        <StatCard
          icon="⏳"
          title="Pending"
          value={pending}
          color="orange"
        />

        <StatCard
          icon="📈"
          title="Completion"
          value={`${percentage}%`}
          color="purple"
        />

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>Tasks by Category</h2>

          {categories.map(category => {

            const count =
              tasks.filter(
                task =>
                  task.category === category
              ).length;

            const width =
              tasks.length
                ? (count / tasks.length) * 100
                : 0;

            return (
              <div
                className="progress-row"
                key={category}
              >

                <div>
                  <span>{category}</span>
                  <strong>{count}</strong>
                </div>

                <div className="progress">
                  <span
                    style={{
                      width: `${width}%`
                    }}
                  />
                </div>

              </div>
            );
          })}

        </div>

        <div className="dashboard-card">

          <h2>Tasks by Priority</h2>

          {priorities.map(priority => {

            const count =
              tasks.filter(
                task =>
                  task.priority === priority
              ).length;

            const width =
              tasks.length
                ? (count / tasks.length) * 100
                : 0;

            return (
              <div
                className="progress-row"
                key={priority}
              >

                <div>
                  <span>{priority}</span>
                  <strong>{count}</strong>
                </div>

                <div className="progress">
                  <span
                    style={{
                      width: `${width}%`
                    }}
                  />
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default Statistics;