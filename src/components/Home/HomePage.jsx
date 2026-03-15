import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProfileSection from './ProfileSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import OfficeSkills from '../Main/OfficeSkills';
import SoftSkills from './SoftSkills';
import SocialLinks from './SocialLinks';
import ContactFormHome from './ContactFormHome';
import './HomePage.css';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('');

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

    // Active section highlighting on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <SocialLinks />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;