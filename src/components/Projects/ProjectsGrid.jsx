import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData';

const ProjectsGrid = () => {
  return (
    <section id="projects">
      <h2 className="card-title">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238bc34a' stroke-width='2'%3E%3Cpolyline points='16 18 22 12 16 6'%3E%3C/polyline%3E%3Cpolyline points='8 6 2 12 8 18'%3E%3C/polyline%3E%3C/svg%3E" 
          alt="Code icon" 
        /> 
        Projects & Development
      </h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;