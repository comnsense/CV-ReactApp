import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="project-card">
      {project.image && !imageError ? (
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-preview-img" 
          onError={handleImageError}
          loading="lazy"
        />
      ) : (
        <div className="image-fallback" style={{ display: 'flex' }}>
          <i className={`fas ${project.fallbackIcon || 'fa-laptop-code'}`}></i>
        </div>
      )}
      
      <div className="card-info">
        <h3 className="project-title">{project.title}</h3>
        
        <div className="project-skills">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
        
        {project.description && (
          <p className="item-details">{project.description}</p>
        )}
        
        {project.details && (
          <div className="item-details">
            <ul>
              {project.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="project-links">
          {project.links.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className={link.icon}></i> 
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;