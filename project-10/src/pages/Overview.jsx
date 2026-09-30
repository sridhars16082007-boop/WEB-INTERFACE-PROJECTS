
import React from "react";
import { Link } from "react-router-dom";
import StatBox from "../components/StatBox";
import EmptyState from "../components/EmptyState";
import { gradeFromPercentage } from "../utils/storage";

function Overview({ learners, marks, attendance }) {
  const average = marks.length
    ? marks.reduce((sum, item) => sum + item.percentage, 0) / marks.length
    : 0;

  const attendanceEntries = Object.values(attendance).flatMap((day) =>
    Object.values(day)
  );

  const attendancePercent = attendanceEntries.length
    ? (attendanceEntries.filter((value) => value === "Present").length /
        attendanceEntries.length) *
      100
    : 0;

  const recent = [...learners]
    .sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    .slice(0, 4);

  const markedStudents = new Set(
    marks.map((item) => item.learnerId)
  ).size;

  return (
    <section className="page-stack">
      <div className="welcome-panel">
        <div className="welcome-copy">
          <span className="eyebrow">THE ACADEMIC REGISTER</span>

          <h2>One desk for every learner, mark and milestone.</h2>

          <p>
            Keep classroom records in one calm workspace. Changes are saved
            automatically in your browser.
          </p>

          <div className="quick-links">
            <Link to="/learners" className="ink-button">
              + Add learner
            </Link>

            <Link to="/gradebook" className="outline-button">
              Enter marks →
            </Link>
          </div>
        </div>

        <div className="ledger-illustration" aria-hidden="true">
          <div className="book">
            <div className="book-line"></div>
            <div className="book-line short"></div>
            <div className="book-line"></div>
            <div className="book-line short"></div>
          </div>

          <span className="bookmark"></span>
        </div>
      </div>

      <div className="stat-ribbon">
        <StatBox
          label="Learners"
          value={learners.length}
          detail="in the register"
          tone="olive"
        />

        <StatBox
          label="Marked"
          value={markedStudents}
          detail="with gradebook entries"
        />

        <StatBox
          label="Average"
          value={`${average.toFixed(1)}%`}
          detail="across stored results"
          tone="orange"
        />

        <StatBox
          label="Attendance"
          value={`${attendancePercent.toFixed(1)}%`}
          detail="from recorded sessions"
          tone="burgundy"
        />
      </div>

      <div className="two-column">
        <div className="paper-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">RECENT ENTRIES</span>
              <h3>Newly added learners</h3>
            </div>

            <Link to="/learners">Open register →</Link>
          </div>

          {recent.length ? (
            <div className="recent-list">
              {recent.map((learner) => (
                <div className="recent-item" key={learner.id}>
                  <span className="student-avatar">
                    {learner.name.slice(0, 1).toUpperCase()}
                  </span>

                  <div>
                    <strong>{learner.name}</strong>
                    <small>
                      {learner.roll} · {learner.className}
                    </small>
                  </div>

                  <span className="record-dot">saved</span>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No learners yet"
              message="Use the learner directory to create your first record."
            />
          )}
        </div>

        <div className="paper-panel quick-panel">
          <span className="eyebrow">SHORTCUTS</span>

          <h3>Move around the desk</h3>

          <div className="shortcut-grid">
            <Link to="/learners">
              <span>01</span> Learner register <b>↗</b>
            </Link>

            <Link to="/gradebook">
              <span>02</span> Gradebook <b>↗</b>
            </Link>

            <Link to="/attendance">
              <span>03</span> Attendance <b>↗</b>
            </Link>

            <Link to="/performance">
              <span>04</span> Insights <b>↗</b>
            </Link>
          </div>
        </div>
      </div>

      <div className="quote-strip">
        <span>“</span>

        <p>
          Small records become useful insights when they are kept consistently.
        </p>

        <strong>
          {marks.length
            ? `Current grade sample: ${gradeFromPercentage(average)}`
            : "Start with your first mark entry"}
        </strong>
      </div>
    </section>
  );
}

export default Overview;

