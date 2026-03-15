import React from 'react';
import { responsibilitiesData } from '../../data/responsibilitiesData';

const Responsibilities = () => {
  return (
    <div className="section">
      <div className="section-title">
        <i className="fas fa-tasks"></i>
        <h2>Основни задължения</h2>
      </div>
      <div className="responsibilities-grid">
        {responsibilitiesData.map((resp, index) => (
          <div key={index} className="resp-item">
            <i className="fas fa-check-circle"></i>
            <span>{resp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Responsibilities;