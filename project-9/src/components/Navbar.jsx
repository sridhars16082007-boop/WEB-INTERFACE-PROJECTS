import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <NavLink to="/" className="logo">
          <span className="logo-icon">✓</span>
          <span>TaskFlow</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/create">Create Task</NavLink>
          <NavLink to="/tasks">My Tasks</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;