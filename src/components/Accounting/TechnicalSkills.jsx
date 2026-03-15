import React from 'react';
import { technicalSkillsData } from '../../data/technicalSkillsData';

const TechnicalSkills = () => {
  return (
    <div className="section technical-section">
      <div className="section-title">
        <i className="fas fa-laptop-code"></i>
        <h2>Технически умения</h2>
      </div>
      <div className="technical-skills-grid">
        {technicalSkillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">
              <i className={`fas ${skill.icon}`}></i>
            </div>
            <div className="skill-info">
              <h4>
                {skill.link ? (
                  <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-title-link">
                    {skill.name} <i className="fas fa-external-link-alt"></i>
                  </a>
                ) : (
                  skill.name
                )}
              </h4>
              <div className="skill-description">
                {skill.link ? (
                  <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-link">
                    {skill.description} <i className="fas fa-external-link-alt"></i>
                  </a>
                ) : (
                  skill.description
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;