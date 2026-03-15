import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const EducationPage = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="education-page">
      <Header />
      <main className="education-container">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Назад към @CV
        </Link>
        <h1>Образование</h1>
        <p>Тук ще бъде съдържанието на страницата</p>
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;