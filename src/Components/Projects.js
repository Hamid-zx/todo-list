import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
  return (
    <div className="ProjectContainer">
      <div className="main-content">
        <div className="dashboard">
          <h2>Projects</h2>
        </div>
      </div>

      <ul className='Projects'>
        {projects.map((project, index) => (
          <li className="projectboxes" key={index}>
            <Link className='labels' to={`/Projects/${project.name}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
