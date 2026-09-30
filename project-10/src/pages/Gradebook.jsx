import React, { useMemo, useState } from "react";
import EmptyState from "../components/EmptyState";
import { gradeFromPercentage } from "../utils/storage";

const subjects = [
  "Tamil",
  "English",
  "Mathematics",
  "Science",
  "Social Science"
];

function Gradebook({ learners, marks, setMarks }) {
  const [learnerId, setLearnerId] = useState("");
  const [scores, setScores] = useState(
    Object.fromEntries(subjects.map((subject) => [subject, ""]))
  );
  const [error, setError] = useState("");

  const selected = learners.find((learner) => learner.id === learnerId);

  const previewTotal = subjects.reduce(
    (sum, subject) => sum + Number(scores[subject] || 0),
    0
  );

  const filledCount = subjects.filter(
    (subject) => scores[subject] !== ""
  ).length;

  const previewPercentage = previewTotal / subjects.length;

  const sortedMarks = useMemo(
    () =>
      [...marks].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ),
    [marks]
  );

  function updateScore(subject, value) {
    if (
      value !== "" &&
      (Number(value) < 0 || Number(value) > 100)
    ) {
      setError(`${subject} must be between 0 and 100.`);
      return;
    }

    setScores({
      ...scores,
      [subject]: value
    });

    setError("");
  }

  function saveMarks(event) {
    event.preventDefault();

    if (!learnerId) {
      setError("Select a learner before entering marks.");
      return;
    }

    if (filledCount !== subjects.length) {
      setError("Enter marks for all five subjects.");
      return;
    }

    const result = {
      id: crypto.randomUUID(),
      learnerId,
      scores: Object.fromEntries(
        subjects.map((subject) => [
          subject,
          Number(scores[subject])
        ])
      ),
      total: previewTotal,
      percentage: Number(previewPercentage.toFixed(2)),
      grade: gradeFromPercentage(previewPercentage),
      createdAt: new Date().toISOString()
    };

    setMarks((current) => [result, ...current]);

    setScores(
      Object.fromEntries(
        subjects.map((subject) => [subject, ""])
      )
    );

    setLearnerId("");
    setError("");
  }

  function deleteResult(id) {
    if (window.confirm("Delete this gradebook result?")) {
      setMarks((current) =>
        current.filter((item) => item.id !== id)
      );
    }
  }

  return (
    <section className="page-stack">
      <div className="section-intro">
        <div>
          <span className="eyebrow">RESULT REGISTER</span>

          <h2>Marks & Gradebook</h2>

          <p>
            Enter five-subject results and let the ledger calculate the rest.
          </p>
        </div>

        <div className="calculation-note">
          5 subjects · 500 total marks
        </div>
      </div>

      <div className="gradebook-layout">
        <form
          className="paper-panel marks-form"
          onSubmit={saveMarks}
        >
          <div className="panel-heading">
            <div>
              <span className="eyebrow">MARK ENTRY</span>
              <h3>New result sheet</h3>
            </div>

            <span className="form-index">02</span>
          </div>

          <label>
            Learner

            <select
              value={learnerId}
              onChange={(e) => {
                setLearnerId(e.target.value);
                setError("");
              }}
            >
              <option value="">Choose a learner</option>

              {learners.map((learner) => (
                <option
                  value={learner.id}
                  key={learner.id}
                >
                  {learner.name} — {learner.roll}
                </option>
              ))}
            </select>
          </label>

          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <label key={subject}>
                <span>
                  {String(index + 1).padStart(2, "0")} · {subject}
                </span>

                <input
                  type="number"
                  min="0"
                  max="100"
                  value={scores[subject]}
                  onChange={(e) =>
                    updateScore(subject, e.target.value)
                  }
                  placeholder="00"
                />
              </label>
            ))}
          </div>

          <div className="calculation-slip">
            <div>
              <span>Total</span>
              <strong>{previewTotal} / 500</strong>
            </div>

            <div>
              <span>Percentage</span>
              <strong>
                {filledCount
                  ? `${previewPercentage.toFixed(1)}%`
                  : "—"}
              </strong>
            </div>

            <div>
              <span>Grade</span>
              <strong>
                {filledCount
                  ? gradeFromPercentage(previewPercentage)
                  : "—"}
              </strong>
            </div>
          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <button
            className="ink-button full-button"
            type="submit"
          >
            Add result to ledger
          </button>
        </form>

        <div className="results-area">
          <div className="results-caption">
            <span>STORED RESULTS</span>
            <strong>{marks.length} entries</strong>
          </div>

          {sortedMarks.length ? (
            sortedMarks.map((result) => {
              const learner = learners.find(
                (item) => item.id === result.learnerId
              );

              return (
                <article
                  className="result-slip"
                  key={result.id}
                >
                  <div className="result-person">
                    <span className="student-avatar">
                      {learner?.name.slice(0, 1) || "?"}
                    </span>

                    <div>
                      <strong>
                        {learner?.name || "Removed learner"}
                      </strong>

                      <small>
                        {learner?.roll || "—"} ·{" "}
                        {learner?.className || "—"}
                      </small>
                    </div>
                  </div>

                  <div className="mark-mini-grid">
                    {subjects.map((subject) => (
                      <span key={subject}>
                        <small>
                          {subject.slice(0, 3)}
                        </small>

                        <b>
                          {result.scores[subject]}
                        </b>
                      </span>
                    ))}
                  </div>

                  <div className="result-total">
                    <strong>{result.total}</strong>
                    <small>{result.percentage}%</small>
                  </div>

                  <div
                    className={`grade-badge grade-${result.grade.replace(
                      "+",
                      "plus"
                    )}`}
                  >
                    {result.grade}
                  </div>

                  <button
                    className="delete-link"
                    type="button"
                    onClick={() => deleteResult(result.id)}
                  >
                    Delete
                  </button>
                </article>
              );
            })
          ) : (
            <EmptyState
              icon="✎"
              title="No results recorded"
              message="Select a learner and enter the first result sheet."
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Gradebook;