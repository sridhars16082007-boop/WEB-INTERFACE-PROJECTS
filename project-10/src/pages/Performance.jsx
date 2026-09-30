import React, { useMemo } from "react";
import EmptyState from "../components/EmptyState";

const subjects = [
  "Tamil",
  "English",
  "Mathematics",
  "Science",
  "Social Science"
];

function Performance({ learners, marks }) {
  const average = marks.length
    ? marks.reduce((sum, item) => sum + item.percentage, 0) /
      marks.length
    : 0;

  const highest = marks.length
    ? Math.max(...marks.map((item) => item.percentage))
    : 0;

  const lowest = marks.length
    ? Math.min(...marks.map((item) => item.percentage))
    : 0;

  const passCount = marks.filter(
    (item) => item.percentage >= 50
  ).length;

  const failCount = marks.filter(
    (item) => item.percentage < 50
  ).length;

  const subjectAverages = subjects.map((subject) => {
    const values = marks
      .map((item) => item.scores[subject])
      .filter((value) => typeof value === "number");

    return {
      subject,
      average: values.length
        ? values.reduce((a, b) => a + b, 0) / values.length
        : 0
    };
  });

  const rows = useMemo(
    () =>
      marks
        .map((item) => ({
          ...item,
          learner: learners.find(
            (learner) => learner.id === item.learnerId
          )
        }))
        .sort((a, b) => b.percentage - a.percentage),
    [marks, learners]
  );

  return (
    <section className="page-stack">
      <div className="section-intro">
        <div>
          <span className="eyebrow">
            ACADEMIC OBSERVATORY
          </span>

          <h2>Performance Insights</h2>

          <p>
            Simple visual signals from the marks stored in
            your gradebook.
          </p>
        </div>

        <div className="insight-stamp">
          LIVE FROM LOCAL STORAGE
        </div>
      </div>

      <div className="insight-grid">
        <div className="insight-feature">
          <span>CLASS AVERAGE</span>

          <strong>{average.toFixed(1)}%</strong>

          <div className="big-progress">
            <i
              style={{
                width: `${Math.min(average, 100)}%`
              }}
            ></i>
          </div>
        </div>

        <div className="insight-stat">
          <span>HIGHEST</span>
          <strong>{highest.toFixed(1)}%</strong>
          <small>top stored result</small>
        </div>

        <div className="insight-stat">
          <span>LOWEST</span>
          <strong>{lowest.toFixed(1)}%</strong>
          <small>lowest stored result</small>
        </div>

        <div className="insight-stat pass">
          <span>PASS</span>
          <strong>{passCount}</strong>
          <small>results at 50%+</small>
        </div>

        <div className="insight-stat fail">
          <span>FAIL</span>
          <strong>{failCount}</strong>
          <small>results below 50%</small>
        </div>
      </div>

      <div className="two-column">
        <div className="paper-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">
                SUBJECT LENS
              </span>

              <h3>Subject-wise average</h3>
            </div>
          </div>

          <div className="subject-bars">
            {subjectAverages.map((item) => (
              <div
                className="subject-bar"
                key={item.subject}
              >
                <div>
                  <span>{item.subject}</span>

                  <strong>
                    {item.average.toFixed(1)}%
                  </strong>
                </div>

                <div className="bar-track">
                  <i
                    style={{
                      width: `${Math.min(
                        item.average,
                        100
                      )}%`
                    }}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="paper-panel insight-note">
          <span className="eyebrow">
            READING THE PAGE
          </span>

          <h3>What the indicators mean</h3>

          <ul>
            <li>
              <b>Average</b> uses every saved result.
            </li>

            <li>
              <b>Subject bars</b> compare the five subjects
              on the same 0–100 scale.
            </li>

            <li>
              <b>Pass / fail</b> follows the same 50% rule
              used by the gradebook.
            </li>
          </ul>
        </div>
      </div>

      <div className="paper-panel performance-table-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">
              RESULT INDEX
            </span>

            <h3>Student performance</h3>
          </div>

          <span>{rows.length} result(s)</span>
        </div>

        {rows.length ? (
          <div className="performance-table">
            <div className="performance-head">
              <span>STUDENT</span>
              <span>TOTAL</span>
              <span>PERCENTAGE</span>
              <span>GRADE</span>
              <span>STATUS</span>
            </div>

            {rows.map((row) => (
              <div
                className="performance-row"
                key={row.id}
              >
                <div>
                  <strong>
                    {row.learner?.name ||
                      "Removed learner"}
                  </strong>

                  <small>
                    {row.learner?.roll || "—"}
                  </small>
                </div>

                <strong>{row.total}/500</strong>

                <div className="percentage-cell">
                  <span>{row.percentage}%</span>

                  <div className="tiny-track">
                    <i
                      style={{
                        width: `${Math.min(
                          row.percentage,
                          100
                        )}%`
                      }}
                    ></i>
                  </div>
                </div>

                <span className="grade-badge">
                  {row.grade}
                </span>

                <span
                  className={
                    row.percentage >= 50
                      ? "status-pass"
                      : "status-fail"
                  }
                >
                  {row.percentage >= 50
                    ? "Pass"
                    : "Fail"}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="◒"
            title="Nothing to analyse yet"
            message="Add marks in the gradebook to populate the performance page."
          />
        )}
      </div>
    </section>
  );
}

export default Performance;