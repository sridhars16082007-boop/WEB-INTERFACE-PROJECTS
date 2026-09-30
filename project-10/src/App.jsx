
import React,{ useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Overview from "./pages/Overview";
import LearnerDirectory from "./pages/LearnerDirectory";
import Gradebook from "./pages/Gradebook";
import Attendance from "./pages/Attendance";
import Performance from "./pages/Performance";
import { STORAGE_KEYS, readStorage } from "./utils/storage";

const initialLearners = [
  { id: "seed-101", name: "Arun Kumar", roll: "101", className: "CSE-A", email: "arun@example.com", phone: "9876543210", createdAt: "2026-09-25T10:00:00.000Z" },
  { id: "seed-102", name: "Meena Ravi", roll: "102", className: "CSE-A", email: "meena@example.com", phone: "9876543211", createdAt: "2026-09-24T10:00:00.000Z" },
  { id: "seed-103", name: "Kavin S", roll: "103", className: "CSE-B", email: "kavin@example.com", phone: "9876543212", createdAt: "2026-09-23T10:00:00.000Z" }
];

function App() {
  const [learners, setLearners] = useState(() =>
    readStorage(STORAGE_KEYS.learners, initialLearners)
  );
  const [marks, setMarks] = useState(() =>
    readStorage(STORAGE_KEYS.marks, [])
  );
  const [attendance, setAttendance] = useState(() =>
    readStorage(STORAGE_KEYS.attendance, {})
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.learners, JSON.stringify(learners));
  }, [learners]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.marks, JSON.stringify(marks));
  }, [marks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.attendance, JSON.stringify(attendance));
  }, [attendance]);

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="page-shell">
        <Header learners={learners} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Overview
                  learners={learners}
                  marks={marks}
                  attendance={attendance}
                />
              }
            />
            <Route
              path="/learners"
              element={
                <LearnerDirectory
                  learners={learners}
                  setLearners={setLearners}
                />
              }
            />
            <Route
              path="/gradebook"
              element={
                <Gradebook
                  learners={learners}
                  marks={marks}
                  setMarks={setMarks}
                />
              }
            />
            <Route
              path="/attendance"
              element={
                <Attendance
                  learners={learners}
                  attendance={attendance}
                  setAttendance={setAttendance}
                />
              }
            />
            <Route
              path="/performance"
              element={
                <Performance
                  learners={learners}
                  marks={marks}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
