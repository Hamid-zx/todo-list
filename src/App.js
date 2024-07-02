import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Projects from './Components/Projects';
import ProjectActions from './Components/ProjectActions';
import ProjectDetail from './Components/ProjectDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';

function App() {
  const [projects, setProjects] = useState([
    { name: 'Work', tasks: [] },
    { name: 'Personal', tasks: [] },
    { name: 'Miscellaneous', tasks: [] }
  ]);

  return (
    <div className="App">
      <Router>
        <Sidebar />

        <Routes>
          <Route exact path="/" element={<Dashboard projects={projects} />} />
          <Route exact path="/Projects" element={<Projects projects={projects} />} />
          <Route exact path="/Projects/:projectName" element={<ProjectDetail projects={projects} setProjects={setProjects} />} />
          <Route exact path="/ProjectActions" element={<ProjectActions projects={projects} setProjects={setProjects} />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
