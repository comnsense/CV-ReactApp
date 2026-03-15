import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import AccountingPage from './components/Accounting/AccountingPage';
import EducationPage from './components/Education/EducationPage';
import ProjectsPage from './components/Projects/ProjectsPage';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schety" element={<AccountingPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;