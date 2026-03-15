import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ProjectsPage = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="projects-page">
      <Header />
      <main className="projects-main-container">
        <h1>Проекти</h1>
        <p>Тук ще бъдат всички проекти</p>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;