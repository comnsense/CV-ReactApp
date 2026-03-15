import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProfileSection from './ProfileSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import OfficeSkills from '../Main/OfficeSkills';
import SoftSkills from './SoftSkills';
import ContactFormHome from './ContactFormHome';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Visitor logging
    const logVisitor = () => {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          const scriptURL = 'https://script.google.com/macros/s/AKfycbwlWPB-UnmtKU5TTjNQC4sZZxaTXTtlD-qjszycYj3ivVvt82nFKGw0nCSemBQnVfln/exec';
          
          fetch(scriptURL + '?ip=' + encodeURIComponent(data.ip) + 
                         '&userAgent=' + encodeURIComponent(navigator.userAgent) + 
                         '&page=' + encodeURIComponent(window.location.pathname), {
            method: 'GET',
            mode: 'no-cors'
          })
          .catch(error => console.error('Error logging visitor:', error));
        })
        .catch(error => console.error('Error getting IP:', error));
    };

    logVisitor();
  }, []);

  return (
    <div className="home-page">
      <Header />
      
      <main className="home-container">
        <ProfileSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <SoftSkills />
        <OfficeSkills />
        <ContactFormHome />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;