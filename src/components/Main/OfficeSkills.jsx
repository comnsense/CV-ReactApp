import React from 'react';
import { officeSkillsData } from '../../data/officeSkillsData';

const OfficeSkills = () => {
  return (
    <section className="office-skills-section">
      <h2 className="card-title">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23306788' stroke-width='2'%3E%3Crect x='2' y='2' width='20' height='20' rx='2.18'%3E%3C/rect%3E%3Cline x1='8' y1='2' x2='8' y2='22'%3E%3C/line%3E%3Cline x1='16' y1='2' x2='16' y2='22'%3E%3C/line%3E%3Cline x1='2' y1='8' x2='22' y2='8'%3E%3C/line%3E%3Cline x1='2' y1='16' x2='22' y2='16'%3E%3C/line%3E%3C/svg%3E" 
          alt=""
        />
        Офис и Бизнес Софтуер
      </h2>
      <div className="office-skills-container">
        {officeSkillsData.map((skill, index) => (
          <div key={index} className="office-skill-card">
            <div className="office-skill-header">
              <div className="office-skill-icon">
                <i className={`fas ${skill.icon}`}></i>
              </div>
              <h3 className="office-skill-name">{skill.name}</h3>
            </div>
            <p className="office-skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeSkills;