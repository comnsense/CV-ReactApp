import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProjectsGrid from './ProjectsGrid';
import TechStackProjects from './TechStackProjects';
import StreakSection from './StreakSection';
import './ProjectsPage.css';

const ProjectsPage = () => {
  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="projects-page">
      <Header />
      
      <main className="projects-main-container">
        <ProjectsGrid />
        
        <div className="resume-card">
          <TechStackProjects />
          <StreakSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;