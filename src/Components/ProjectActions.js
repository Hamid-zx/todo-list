import React, { useState } from 'react';
import './ProjectActions.css';

const ProjectActions = ({ projects, setProjects }) => {
  const [newProject, setNewProject] = useState('');

  const addProject = () => {
    if (newProject.trim()) {
      setProjects([...projects, { name: newProject, tasks: [] }]);
      setNewProject('');
    }
  };

  const deleteProject = (projectName) => {
    setProjects(projects.filter(project => project.name !== projectName));
  };

  return (
    <div className="ProjectActionsContainer">
      <div className="main-content">
        <div className="dashboard">
          <h2>Projects</h2>
          <input 
            type="text" 
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            placeholder="New Project Name"
          />
          <button onClick={addProject}>Add Project</button>

          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                {project.name}
                <button onClick={() => deleteProject(project.name)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectActions;
