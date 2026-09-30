import { useState } from "react";

function Settings() {

  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem("darkMode") === "true"
    );

  const [notifications, setNotifications] =
    useState(true);

  const toggleDarkMode = () => {

    const newValue = !darkMode;

    setDarkMode(newValue);

    localStorage.setItem(
      "darkMode",
      newValue
    );

    document.body.classList.toggle(
      "dark-mode",
      newValue
    );
  };

  const clearCompleted = () => {

    const tasks = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );

    const remaining =
      tasks.filter(task => !task.completed);

    localStorage.setItem(
      "tasks",
      JSON.stringify(remaining)
    );

    alert("Completed tasks cleared.");
  };

  const clearAll = () => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete all tasks?"
      );

    if (!confirmDelete) return;

    localStorage.removeItem("tasks");

    alert("All tasks cleared.");
  };

  return (
    <div className="page settings-page">

      <div className="page-title">
        <h1>Settings</h1>
        <p>
          Customize your TaskFlow application.
        </p>
      </div>

      <div className="settings-card">

        <div className="settings-section">

          <h2>Appearance</h2>

          <div className="setting-row">

            <div>
              <strong>🌙 Dark Mode</strong>
              <small>
                Change the application appearance.
              </small>
            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />

          </div>

        </div>


        <div className="settings-section">

          <h2>Notifications</h2>

          <div className="setting-row">

            <div>
              <strong>🔔 Task Alerts</strong>
              <small>
                Enable task reminder notifications.
              </small>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={e =>
                setNotifications(
                  e.target.checked
                )
              }
            />

          </div>

        </div>


        <div className="settings-section">

          <h2>Data Management</h2>

          <div className="setting-row">

            <div>
              <strong>
                🗑 Clear Completed Tasks
              </strong>

              <small>
                Remove all completed tasks.
              </small>
            </div>

            <button
              className="secondary-btn"
              onClick={clearCompleted}
            >
              Clear
            </button>

          </div>

          <div className="setting-row">

            <div>
              <strong>
                🧹 Clear All Tasks
              </strong>

              <small>
                Delete all saved tasks.
              </small>
            </div>

            <button
              className="danger-btn"
              onClick={clearAll}
            >
              Clear All
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;