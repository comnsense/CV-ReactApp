import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const HomePage = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main className="home-container">
        <h1>Добре дошли в CV на Мирела Йосифова</h1>
        <p>Тук ще бъде съдържанието на началната страница</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;