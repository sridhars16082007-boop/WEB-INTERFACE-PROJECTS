import React, { useMemo, useState } from "react";
import EmptyState from "../components/EmptyState";

function Attendance({ learners, attendance, setAttendance }) {
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [classFilter, setClassFilter] = useState("All");

  const classes = [
    ...new Set(
      learners.map((learner) => learner.className)
    )
  ].sort();

  const visibleLearners = useMemo(
    () =>
      learners.filter(
        (learner) =>
          classFilter === "All" ||
          learner.className === classFilter
      ),
    [learners, classFilter]
  );

  const dayRecord = attendance[date] || {};

  const presentCount = visibleLearners.filter(
    (learner) => dayRecord[learner.id] === "Present"
  ).length;

  const markedCount = visibleLearners.filter(
    (learner) => dayRecord[learner.id]
  ).length;

  const percent = visibleLearners.length
    ? (presentCount / visibleLearners.length) * 100
    : 0;

  function mark(learnerId, status) {
    setAttendance((current) => ({
      ...current,
      [date]: {
        ...(current[date] || {}),
        [learnerId]: status
      }
    }));
  }

  function markAll(status) {
    const updated = {
      ...(attendance[date] || {})
    };

    visibleLearners.forEach((learner) => {
      updated[learner.id] = status;
    });

    setAttendance((current) => ({
      ...current,
      [date]: updated
    }));
  }

  return (
    <section className="page-stack">
      <div className="section-intro">
        <div>
          <span className="eyebrow">DAILY REGISTER</span>

          <h2>Attendance Tracker</h2>

          <p>
            Mark each learner's presence without turning
            the page into a spreadsheet.
          </p>
        </div>

        <div className="attendance-meter">
          <strong>{percent.toFixed(0)}%</strong>
          <span>present today</span>
        </div>
      </div>

      <div className="attendance-toolbar paper-panel">
        <label>
          Date

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Class

          <select
            value={classFilter}
            onChange={(e) =>
              setClassFilter(e.target.value)
            }
          >
            <option value="All">All classes</option>

            {classes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <div className="toolbar-actions">
          <button
            className="soft-button"
            type="button"
            onClick={() => markAll("Present")}
          >
            Mark all present
          </button>

          <button
            className="text-button"
            type="button"
            onClick={() => markAll("Absent")}
          >
            Mark all absent
          </button>
        </div>
      </div>

      <div className="attendance-summary">
        <div>
          <span>Roster</span>
          <strong>{visibleLearners.length}</strong>
        </div>

        <div>
          <span>Marked</span>
          <strong>{markedCount}</strong>
        </div>

        <div>
          <span>Present</span>
          <strong>{presentCount}</strong>
        </div>

        <div>
          <span>Absent</span>
          <strong>{markedCount - presentCount}</strong>
        </div>
      </div>

      <div className="attendance-list">
        {visibleLearners.length ? (
          visibleLearners.map((learner, index) => {
            const status =
              dayRecord[learner.id] || "Unmarked";

            return (
              <div
                className="attendance-row"
                key={learner.id}
              >
                <span className="attendance-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="attendance-person">
                  <span className="student-avatar">
                    {learner.name.slice(0, 1)}
                  </span>

                  <div>
                    <strong>{learner.name}</strong>

                    <small>
                      Roll {learner.roll} ·{" "}
                      {learner.className}
                    </small>
                  </div>
                </div>

                <div
                  className={`attendance-status ${status.toLowerCase()}`}
                >
                  {status}
                </div>

                <div className="status-switch">
                  <button
                    type="button"
                    className={
                      status === "Present"
                        ? "selected-present"
                        : ""
                    }
                    onClick={() =>
                      mark(learner.id, "Present")
                    }
                  >
                    Present
                  </button>

                  <button
                    type="button"
                    className={
                      status === "Absent"
                        ? "selected-absent"
                        : ""
                    }
                    onClick={() =>
                      mark(learner.id, "Absent")
                    }
                  >
                    Absent
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyState
            title="No learners for this class"
            message="Add learners in the directory first."
          />
        )}
      </div>
    </section>
  );
}

export default Attendance;