import React from 'react';
import './Dashboard.css';

const Dashboard = ({ projects }) => {
  const hasPendingTasks = projects.some(project => project.tasks.length > 0);

  return (
    <div className="Dashboardcontainer">
      <div className="main-content">
        <div className="dashboard">
          <h2>Dashboard</h2>
          {hasPendingTasks ? (
            <ul>
              {projects.map((project, projectIndex) => (
                project.tasks.map((task, taskIndex) => (
                  <li key={`${projectIndex}-${taskIndex}`}>
                    <strong>{project.name}</strong>: {task.name} {task.completed ? '(Completed)' : '(Pending)'}
                  </li>
                ))
              ))}
            </ul>
          ) : (
            <p>Nothing to do... Huh!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
