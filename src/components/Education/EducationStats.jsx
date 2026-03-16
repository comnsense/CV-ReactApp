import React from 'react';
import { coursesData } from '../../data/coursesData';

const EducationStats = ({ currentLang }) => {
  // Изчисления за статистика
  const totalCourses = coursesData.length;
  const averageGrade = 5.02;
  
  const highGrades = coursesData.filter(c => parseInt(c.grade) >= 5).length;
  const highGradesPercent = Math.round((highGrades / totalCourses) * 100);
  
  // ПРЕМАХНЕТЕ ТОЗИ БЛОК - той не се използва
  // const ectsDistribution = {
  //   A: coursesData.filter(c => c.ects === 'A').length,
  //   B: coursesData.filter(c => c.ects === 'B').length,
  //   C: coursesData.filter(c => c.ects === 'C').length,
  //   D: coursesData.filter(c => c.ects === 'D').length,
  //   E: coursesData.filter(c => c.ects === 'E').length
  // };

  return (
    <div className="education-stats-container">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-book-open"></i>
          </div>
          <div className="stat-content">
            <div className="stat-value">{totalCourses}</div>
            <div className="stat-label">
              {currentLang === 'bg' ? 'Завършени курсове' : 'Completed Courses'}
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="stat-content">
            <div className="stat-value">{averageGrade.toFixed(2)}</div>
            <div className="stat-label">
              {currentLang === 'bg' ? 'Среден успех' : 'GPA'}
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="stat-content">
            <div className="stat-value">{highGradesPercent}%</div>
            <div className="stat-label">
              {currentLang === 'bg' ? 'Отлични оценки' : 'Excellent Grades'}
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <div className="stat-value">240</div>
            <div className="stat-label">
              {currentLang === 'bg' ? 'ECTS кредити' : 'ECTS Credits'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationStats;