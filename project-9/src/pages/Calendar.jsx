import { useState } from "react";

function Calendar() {

  const [currentDate, setCurrentDate] =
    useState(new Date());

  const [selectedDate, setSelectedDate] =
    useState(
      new Date()
        .toISOString()
        .split("T")[0]
    );

  const tasks = JSON.parse(
    localStorage.getItem("tasks") || "[]"
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay =
    new Date(year, month, 1).getDay();

  const daysInMonth =
    new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const dateString = day => {
    return `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
  };

  const selectedTasks = tasks.filter(
    task => task.date === selectedDate
  );

  const previousMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
  };

  return (
    <div className="page">

      <div className="calendar-header">

        <div>
          <h1>Monthly Calendar</h1>
          <p>
            View your tasks according to their dates.
          </p>
        </div>

        <div className="month-controls">

          <button onClick={previousMonth}>
            ‹
          </button>

          <strong>
            {currentDate.toLocaleString(
              "default",
              {
                month: "long",
                year: "numeric"
              }
            )}
          </strong>

          <button onClick={nextMonth}>
            ›
          </button>

        </div>

      </div>

      <div className="calendar-card">

        <div className="calendar-weekdays">

          {[
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
          ].map(day => (
            <div key={day}>{day}</div>
          ))}

        </div>

        <div className="calendar-grid">

          {days.map((day, index) => {

            if (!day) {
              return (
                <div
                  className="calendar-day empty-day"
                  key={index}
                />
              );
            }

            const date = dateString(day);

            const dayTasks =
              tasks.filter(
                task => task.date === date
              );

            return (
              <button
                key={day}
                className={`calendar-day ${
                  selectedDate === date
                    ? "calendar-selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedDate(date)
                }
              >

                <strong>{day}</strong>

                {dayTasks.length > 0 && (
                  <span>
                    • {dayTasks.length} task
                    {dayTasks.length > 1
                      ? "s"
                      : ""}
                  </span>
                )}

              </button>
            );
          })}

        </div>

      </div>

      <div className="selected-day-card">

        <h2>
          {new Date(
            selectedDate + "T00:00:00"
          ).toLocaleDateString(
            "default",
            {
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          )}
        </h2>

        {selectedTasks.length === 0 ? (

          <div className="empty-state">
            <div>📅</div>
            <p>No tasks on this date.</p>
          </div>

        ) : (

          selectedTasks.map(task => (
            <div
              className="calendar-task"
              key={task.id}
            >
              <span className="task-dot"></span>

              <div>
                <strong>{task.title}</strong>
                <small>
                  {task.time || "No time"} ·{" "}
                  {task.priority}
                </small>
              </div>
            </div>
          ))

        )}

      </div>

    </div>
  );
}

export default Calendar;