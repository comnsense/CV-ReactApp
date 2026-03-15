import React from 'react';
import { techStackData, skillCategoriesData } from '../../data/techStackData';

const TechStackProjects = () => {
  return (
    <>
      <section id="tech-stack">
        <h2>
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23306788' stroke-width='2'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12' y2='21'%3E%3C/line%3E%3C/svg%3E" 
            alt=""
          />
          Tech Stack
        </h2>
        <div className="skills-panel">
          {techStackData.map((tech, index) => (
            <div key={index} className="skill">
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
          
          <div className="skill-icons-row">
            <img 
              src="https://skillicons.dev/icons?i=js,ts,nodejs,dotnet,react,git" 
              alt="skill icons" 
            />
          </div>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 className="card-title">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23306788' stroke-width='2'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'%3E%3C/path%3E%3C/svg%3E" 
            alt=""
          />
          Skills by Category
        </h2>
        <div className="skills-grid">
          {skillCategoriesData.map((category, index) => (
            <div key={index} className="skill-category">
              <h4>{category.title}</h4>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill.iconType === 'img' ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : skill.iconType === 'material' ? (
                      <span className="material-icons" style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
                    ) : (
                      <i className={skill.icon} style={{ marginRight: '5px' }}></i>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechStackProjects;