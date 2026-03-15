import React from 'react';

const SkillsSection = () => {
  return (
    <section style={{ marginTop: '3rem' }}>
      <h2 className="card-title">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23306788' stroke-width='2'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'%3E%3C/path%3E%3C/svg%3E" 
          alt=""
        />
        Умения
      </h2>

      <div className="skills-grid">
        <div className="skill-category">
          <h4>CMS и дизайн</h4>
          <div className="skill-tags">
            <span className="skill-tag">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              WordPress
            </span>
            <span className="skill-tag">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              Canva
            </span>
            <span className="skill-tag">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" alt="Photoshop" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              Photoshop
            </span>
          </div>
        </div>

        <div className="skill-category">
          <h4>CRM и бизнес</h4>
          <div className="skill-tags">
            <span className="skill-tag">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" alt="Salesforce" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              Salesforce
            </span>
            <span className="skill-tag">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              Google Cloud
            </span>
            <span className="skill-tag">
              <i className="fas fa-headset" style={{ marginRight: '5px' }}></i> Zendesk
            </span>
          </div>
        </div>

        <div className="skill-category">
          <h4>Операционни системи</h4>
          <div className="skill-tags">
            <span className="skill-tag">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              Windows
            </span>
            <span className="skill-tag">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Unix/Linux" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              Unix/Linux
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;