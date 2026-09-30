
import React from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": ["Overview", "Your academic desk at a glance."],
  "/learners": ["Learner Directory", "Maintain the class register."],
  "/gradebook": ["Marks & Gradebook", "Record subject-wise academic results."],
  "/attendance": ["Attendance Tracker", "Mark classroom presence by date."],
  "/performance": [
    "Performance Insights",
    "Read the patterns behind the results."
  ]
};

function Header({ learners }) {
  const { pathname } = useLocation();
  const [title, subtitle] = titles[pathname] || titles["/"];

  return (
    <header className="topbar">
      <div>
        <div className="breadcrumb">
          CAMPUS / ACADEMICS / {title.toUpperCase()}
        </div>

        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="topbar-meta">
        <div className="date-stamp">
          <span>Today</span>

          <strong>
            {new Intl.DateTimeFormat("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric"
            }).format(new Date())}
          </strong>
        </div>

        <div className="people-chip">
          <span className="mini-avatar">S</span>

          <div>
            <strong>Academic Desk</strong>
            <small>{learners.length} learners</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
