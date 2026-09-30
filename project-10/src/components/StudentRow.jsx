import React from "react";

function StudentRow({ learner, children }) {
  const initials = learner.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="student-row">
      <div className="student-identity">
        <span className="student-avatar">{initials}</span>

        <div>
          <strong>{learner.name}</strong>
          <small>Roll {learner.roll}</small>
        </div>
      </div>

      <span className="class-tag">{learner.className}</span>

      {children}
    </div>
  );
}

export default StudentRow;