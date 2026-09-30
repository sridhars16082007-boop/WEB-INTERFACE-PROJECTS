
import React, { useState } from "react";
import "./App.css";

function Attend() {
  const [students, setStudents] = useState([
    { id: 1, name: "Sridhar", present: false },
    { id: 2, name: "Arun", present: false },
    { id: 3, name: "Kavin", present: false },
    { id: 4, name: "Rahul", present: false },
    { id: 5, name: "Vijay", present: false }
  ]);

  // Mark student as Present or Absent
  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: status }
          : student
      )
    );
  };

  // Count total present students
  const totalPresent = students.filter(
    (student) => student.present
  ).length;

  // Count total absent students
  const totalAbsent = students.length - totalPresent;

  // Calculate attendance percentage
  const attendancePercentage =
    students.length === 0
      ? 0
      : ((totalPresent / students.length) * 100).toFixed(1);

  return (
    <div className="container">

      <h1>Student Attendance Tracker</h1>

      <div className="summary">
        <div>
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div>
          <h3>Present</h3>
          <p>{totalPresent}</p>
        </div>

        <div>
          <h3>Absent</h3>
          <p>{totalAbsent}</p>
        </div>

        <div>
          <h3>Attendance</h3>
          <p>{attendancePercentage}%</p>
        </div>
      </div>

      <div className="student-list">

        {students.map((student) => (
          <div className="student" key={student.id}>

            <div>
              <h3>{student.name}</h3>

              <span
                className={
                  student.present
                    ? "status present"
                    : "status absent"
                }
              >
                {student.present ? "Present" : "Absent"}
              </span>
            </div>

            <div className="buttons">

              <button
                className="present-btn"
                onClick={() =>
                  markAttendance(student.id, true)
                }
              >
                Present
              </button>

              <button
                className="absent-btn"
                onClick={() =>
                  markAttendance(student.id, false)
                }
              >
                Absent
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Attend;

