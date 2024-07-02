import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Task Manager</div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/Projects">Categories/Projects</Link></li>
          <li><Link to="/ProjectActions">Project Actions</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;
