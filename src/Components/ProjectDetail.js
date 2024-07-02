import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = ({ projects, setProjects }) => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.name === projectName);

  const [newTask, setNewTask] = useState('');

  if (!project) {
    return <div>Project not found</div>;
  }

  const addTask = () => {
    if (newTask.trim()) {
      const updatedProjects = projects.map(p => {
        if (p.name === projectName) {
          return { ...p, tasks: [...p.tasks, { name: newTask, completed: false }] };
        }
        return p;
      });
      setProjects(updatedProjects);
      setNewTask('');
    }
  };

  const deleteTask = (taskName) => {
    const updatedProjects = projects.map(p => {
      if (p.name === projectName) {
        return { ...p, tasks: p.tasks.filter(task => task.name !== taskName) };
      }
      return p;
    });
    setProjects(updatedProjects);
  };

  const toggleTaskCompletion = (taskName) => {
    const updatedProjects = projects.map(p => {
      if (p.name === projectName) {
        return {
          ...p,
          tasks: p.tasks.map(task =>
            task.name === taskName ? { ...task, completed: !task.completed } : task
          )
        };
      }
      return p;
    });
    setProjects(updatedProjects);
  };

  return (
    <div className="ProjectDetailContainer">
      <div className="main-content">
        <div className="dashboard">
          <h2>{project.name}</h2>
          <input 
            type="text" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New Task"
          />
          <button onClick={addTask}>Add Task</button>

          <ul>
            {project.tasks.map((task, index) => (
              <li key={index}>
                <span
                  onClick={() => toggleTaskCompletion(task.name)}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                >
                  {task.name}
                </span>
                <button onClick={() => deleteTask(task.name)}>Delete</button>
              </li>
            ))}
          </ul>

          <button onClick={() => navigate('/Projects')}>Back to Projects</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
