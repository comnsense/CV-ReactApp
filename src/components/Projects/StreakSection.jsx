import React from 'react';

const StreakSection = () => {
  return (
    <div className="streak-section">
      <h2 className="card-title">
        <i className="fas fa-fire"></i>
        GitHub Streak
      </h2>
      <div className="streak-container">
        <img 
          src="https://github-readme-streak-stats.herokuapp.com/?user=comnsense&hide_border=true&theme=tokyonight" 
          alt="GitHub Streak Stats"
          className="streak-image"
        />
        <div className="streak-stats">
          <div className="stat-item">
            <i className="fas fa-calendar-check"></i>
            <span>Current Streak: 15 days</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-trophy"></i>
            <span>Longest Streak: 45 days</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-code-branch"></i>
            <span>Total Contributions: 1,234</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakSection;