export const STORAGE_KEYS = {
  learners: "campus-ledger-learners",
  marks: "campus-ledger-marks",
  attendance: "campus-ledger-attendance"
};

export function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function gradeFromPercentage(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B+";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C";
  return "F";
}

export function markStatus(percentage) {
  return percentage >= 50 ? "Pass" : "Fail";
}

export function formatDate(dateValue) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(dateValue));
}
