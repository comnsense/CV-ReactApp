import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import CourseList from './CourseList';
import EducationStats from './EducationStats';
import PdfLinks from './PdfLinks';
import LanguageSwitcher from './LanguageSwitcher';
import './EducationPage.css';

const EducationPage = () => {
  const [currentLang, setCurrentLang] = useState('bg');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <div className="education-page">
      <Header />
      
      <main className="education-container">
        <div className="header-controls-education">
          <LanguageSwitcher onLanguageChange={handleLanguageChange} currentLang={currentLang} />
        </div>

        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i>
          <span>Назад към @CV</span>
        </Link>

        <div className="page-header">
          <h1 className="page-title">
            {currentLang === 'bg' ? 'Дипломно приложение' : 'Thesis Application'}
          </h1>
          <p className="page-subtitle">
            {currentLang === 'bg' 
              ? 'Бакалавър по Информатика и Компютърни науки' 
              : 'Bachelor of Science in Informatics and Computer Science'}
          </p>
          
          <PdfLinks currentLang={currentLang} />
        </div>

        <div className="content-section active">
          <CourseList currentLang={currentLang} />
          <EducationStats currentLang={currentLang} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EducationPage;