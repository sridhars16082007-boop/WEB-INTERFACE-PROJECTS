
import React, { useMemo, useState } from "react";
import StudentRow from "../components/StudentRow";
import EmptyState from "../components/EmptyState";

const blankForm = {
  name: "",
  roll: "",
  className: "",
  email: "",
  phone: ""
};

function LearnerDirectory({ learners, setLearners }) {
  const [form, setForm] = useState(blankForm);
  const [query, setQuery] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [error, setError] = useState("");

  const classes = [
    ...new Set(learners.map((learner) => learner.className))
  ].sort();

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();

    return learners.filter((learner) => {
      const matchesSearch =
        !search ||
        learner.name.toLowerCase().includes(search) ||
        learner.roll.toLowerCase().includes(search) ||
        learner.email.toLowerCase().includes(search);

      const matchesClass =
        classFilter === "All" ||
        learner.className === classFilter;

      return matchesSearch && matchesClass;
    });
  }, [learners, query, classFilter]);

  function updateField(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

    setError("");
  }

  function addLearner(event) {
    event.preventDefault();

    const required = Object.values(form).every(
      (value) => value.trim()
    );

    if (!required) {
      setError(
        "Please complete every field before adding the learner."
      );
      return;
    }

    const duplicate = learners.some(
      (learner) =>
        learner.roll.trim().toLowerCase() ===
        form.roll.trim().toLowerCase()
    );

    if (duplicate) {
      setError(
        "That roll number already exists. Please use a unique roll number."
      );
      return;
    }

    const newLearner = {
      ...form,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };

    setLearners((current) => [
      newLearner,
      ...current
    ]);

    setForm(blankForm);
    setError("");
  }

  function removeLearner(id) {
    const learner = learners.find(
      (item) => item.id === id
    );

    if (!learner) return;

    const confirmed = window.confirm(
      `Delete ${learner.name} (Roll ${learner.roll})? This removes the learner from the directory.`
    );

    if (confirmed) {
      setLearners((current) =>
        current.filter((item) => item.id !== id)
      );
    }
  }

  return (
    <section className="page-stack">

      <div className="section-intro">
        <div>
          <span className="eyebrow">
            CLASS REGISTER
          </span>

          <h2>Learner Directory</h2>

          <p>
            Add and maintain the people connected to your
            academic records.
          </p>
        </div>

        <div className="record-count">
          <strong>{learners.length}</strong>
          <span>learners</span>
        </div>
      </div>

      <div className="directory-layout">

        {/* Add Learner Form */}
        <form
          className="paper-panel add-form"
          onSubmit={addLearner}
        >
          <div className="panel-heading">
            <div>
              <span className="eyebrow">
                NEW RECORD
              </span>

              <h3>Add a learner</h3>
            </div>

            <span className="form-index">
              01
            </span>
          </div>

          <label>
            Student name

            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="e.g. Arun Kumar"
            />
          </label>

          <div className="field-row">

            <label>
              Roll number

              <input
                name="roll"
                value={form.roll}
                onChange={updateField}
                placeholder="101"
              />
            </label>

            <label>
              Class / Dept

              <input
                name="className"
                value={form.className}
                onChange={updateField}
                placeholder="CSE-A"
              />
            </label>

          </div>

          <label>
            Email

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              placeholder="student@example.com"
            />
          </label>

          <label>
            Phone number

            <input
              name="phone"
              inputMode="numeric"
              value={form.phone}
              onChange={updateField}
              placeholder="10-digit number"
            />
          </label>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <button
            className="ink-button full-button"
            type="submit"
          >
            Save to register
          </button>
        </form>

        {/* Register Area */}
        <div className="register-area">

          <div className="filter-bar">

            <label className="search-field">
              <span>⌕</span>

              <input
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                placeholder="Search name, roll or email..."
              />
            </label>

            <select
              value={classFilter}
              onChange={(e) =>
                setClassFilter(e.target.value)
              }
            >
              <option value="All">
                All classes
              </option>

              {classes.map((className) => (
                <option
                  key={className}
                  value={className}
                >
                  {className}
                </option>
              ))}
            </select>

          </div>

          <div className="register-heading">
            <span>LEARNER</span>
            <span>CLASS</span>
            <span>CONTACT</span>
            <span>ACTION</span>
          </div>

          <div className="student-register">

            {filtered.length ? (
              filtered.map((learner) => (
                <StudentRow
                  learner={learner}
                  key={learner.id}
                >
                  <div className="contact-cell">
                    <span>
                      {learner.email}
                    </span>

                    <small>
                      {learner.phone}
                    </small>
                  </div>

                  <button
                    className="delete-link"
                    onClick={() =>
                      removeLearner(learner.id)
                    }
                    type="button"
                  >
                    Delete
                  </button>
                </StudentRow>
              ))
            ) : (
              <EmptyState
                icon="⌕"
                title="No matching learners"
                message="Try another search or class filter."
              />
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

export default LearnerDirectory;

