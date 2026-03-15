import React from 'react';
import { coursesData } from '../../data/coursesData';

const EducationStats = ({ currentLang }) => {
  // Изчисления за статистика
  const totalCourses = coursesData.length;
  const totalCredits = 240;
  const averageGrade = 5.02;
  
  const highGrades = coursesData.filter(c => parseInt(c.grade) >= 5).length;
  const highGradesPercent = Math.round((highGrades / totalCourses) * 100);
  
  const ectsDistribution = {
    A: coursesData.filter(c => c.ects === 'A').length,
    B: coursesData.filter(c => c.ects === 'B').length,
    C: coursesData.filter(c => c.ects === 'C').length,
    D: coursesData.filter(c => c.ects === 'D').length,
    E: coursesData.filter(c => c.ects === 'E').length
  };

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

      <div className="stats-details">
        <div className="stats-chart">
          <h4>{currentLang === 'bg' ? 'Разпределение на оценките' : 'Grade Distribution'}</h4>
          <div className="chart-bars">
            <div className="chart-bar-container">
              <div className="chart-bar-label">A (6)</div>
              <div className="chart-bar" style={{ width: `${(ectsDistribution.A / totalCourses) * 100}%` }}>
                <span>{ectsDistribution.A}</span>
              </div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar-label">B (5)</div>
              <div className="chart-bar" style={{ width: `${(ectsDistribution.B / totalCourses) * 100}%` }}>
                <span>{ectsDistribution.B}</span>
              </div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar-label">C (4)</div>
              <div className="chart-bar" style={{ width: `${(ectsDistribution.C / totalCourses) * 100}%` }}>
                <span>{ectsDistribution.C}</span>
              </div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar-label">D (3)</div>
              <div className="chart-bar" style={{ width: `${(ectsDistribution.D / totalCourses) * 100}%` }}>
                <span>{ectsDistribution.D}</span>
              </div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar-label">E (2)</div>
              <div className="chart-bar" style={{ width: `${(ectsDistribution.E / totalCourses) * 100}%` }}>
                <span>{ectsDistribution.E}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-info">
          <div className="info-item">
            <i className="fas fa-university"></i>
            <div className="info-content">
              <span className="info-label">{currentLang === 'bg' ? 'Университет' : 'University'}</span>
              <span className="info-value">Варненски свободен университет</span>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-calendar-alt"></i>
            <div className="info-content">
              <span className="info-label">{currentLang === 'bg' ? 'Период' : 'Period'}</span>
              <span className="info-value">2019 - 2024</span>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-graduation-cap"></i>
            <div className="info-content">
              <span className="info-label">{currentLang === 'bg' ? 'Степен' : 'Degree'}</span>
              <span className="info-value">Бакалавър</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationStats;