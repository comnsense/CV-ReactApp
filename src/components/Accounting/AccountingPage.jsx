import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import CompaniesTable from './CompaniesTable';
import Responsibilities from './Responsibilities';
import TechnicalSkills from './TechnicalSkills';
import Stats from './Stats';
import ContactForm from './ContactForm';
import './AccountingPage.css';

const AccountingPage = () => {
  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Scroll tracking
    let scrolled = false;
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 300) {
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'scroll_deep', {
            'event_category': 'Engagement',
            'event_label': 'schety_page_scroll'
          });
        }
        scrolled = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Time tracking
    setTimeout(() => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'time_on_page', {
          'event_category': 'Engagement',
          'event_label': '30_seconds',
          'value': 30
        });
      }
    }, 30000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="accounting-page">
      <Header />
      
      <main className="accounting-container">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Назад към @CV
        </Link>

        <div className="profile">
          <div className="profile-title">
            <h1>Практически опит</h1>
          </div>
        </div>

        <CompaniesTable />
        <Responsibilities />
        <TechnicalSkills />
        <Stats />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default AccountingPage;