import React, { useState, useEffect } from 'react';
import { coursesData } from '../../data/coursesData';

const CourseList = ({ currentLang }) => {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  // Филтриране на курсовете
  const filteredCourses = courses.filter(course => {
    const courseName = currentLang === 'bg' ? course.bg : course.en;
    const matchesSearch = courseName.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'high') return matchesSearch && parseInt(course.grade) >= 5;
    if (filter === 'medium') return matchesSearch && parseInt(course.grade) === 4;
    if (filter === 'low') return matchesSearch && parseInt(course.grade) <= 3;
    
    return matchesSearch;
  });

  return (
    <div className="info-card">
      <h3 className="card-title">
        <i className="fas fa-graduation-cap"></i>
        {currentLang === 'bg' ? 'Завършени курсове' : 'Completed Courses'}
        <span className="course-count">({courses.length})</span>
      </h3>

      <div className="course-filters">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder={currentLang === 'bg' ? 'Търси курс...' : 'Search courses...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {currentLang === 'bg' ? 'Всички' : 'All'}
          </button>
          <button 
            className={`filter-btn high ${filter === 'high' ? 'active' : ''}`}
            onClick={() => setFilter('high')}
          >
            {currentLang === 'bg' ? 'Отлични (5-6)' : 'Excellent (5-6)'}
          </button>
          <button 
            className={`filter-btn medium ${filter === 'medium' ? 'active' : ''}`}
            onClick={() => setFilter('medium')}
          >
            {currentLang === 'bg' ? 'Добри (4)' : 'Good (4)'}
          </button>
          <button 
            className={`filter-btn low ${filter === 'low' ? 'active' : ''}`}
            onClick={() => setFilter('low')}
          >
            {currentLang === 'bg' ? 'Средни (3)' : 'Average (3)'}
          </button>
        </div>
      </div>

      <div className="course-list">
        <div className="course-list-header">
          <span className="course-num">#</span>
          <span className="course-name-header">{currentLang === 'bg' ? 'Име на курс' : 'Course Name'}</span>
          <span className="course-grade-header">Оценка</span>
          <span className="course-ects-header">ECTS</span>
        </div>
        
        <div className="course-items">
          {filteredCourses.map((course, index) => (
            <div key={index} className={`course-item grade-${course.ects.toLowerCase()}`}>
              <span className="course-num">{index + 1}.</span>
              <span className="course-name">
                {currentLang === 'bg' ? course.bg : course.en}
              </span>
              <span className="course-grade">{course.grade}</span>
              <span className="course-ects">{course.ects}</span>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <p>{currentLang === 'bg' ? 'Няма намерени курсове' : 'No courses found'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;