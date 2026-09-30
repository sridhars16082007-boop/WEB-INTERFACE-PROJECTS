import { NavLink } from "react-router-dom";
import React from "react";

const links = [
  { to: "/", icon: "⌂", label: "Overview", end: true },
  { to: "/learners", icon: "▤", label: "Learner Directory" },
  { to: "/gradebook", icon: "✎", label: "Marks & Gradebook" },
  { to: "/attendance", icon: "✓", label: "Attendance Tracker" },
  { to: "/performance", icon: "◒", label: "Performance Insights" }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">CL</div>
        <div>
          <strong>Campus Ledger</strong>
          <span>Academic desk</span>
        </div>
      </div>

      <div className="shelf-label">WORKSPACE</div>
      <nav className="side-nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="nav-icon">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-note">
        <span className="note-pin">●</span>
        <div>
          <strong>Desk note</strong>
          <p>Keep marks and attendance updated after each class.</p>
        </div>
      </div>

      <div className="sidebar-footer">Student Academic Management • 2026</div>
    </aside>
  );
}

export default Sidebar;
