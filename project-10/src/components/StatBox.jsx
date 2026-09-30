
import React from "react";

function StatBox({ label, value, detail, tone }) {
  return (
    <div className={`stat-box ${tone ? `stat-${tone}` : ""}`}>
      <span className="stat-label">{label}</span>

      <strong className="stat-value">{value}</strong>

      <small className="stat-detail">{detail}</small>
    </div>
  );
}

export default StatBox;

