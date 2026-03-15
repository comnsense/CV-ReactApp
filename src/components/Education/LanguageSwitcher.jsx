import React from 'react';

const LanguageSwitcher = ({ onLanguageChange, currentLang }) => {
  return (
    <div className="lang-switch">
      <button 
        className={`lang-btn ${currentLang === 'bg' ? 'active' : ''}`}
        onClick={() => onLanguageChange('bg')}
      >
        <i className="fas fa-language"></i>
        <span>BG</span>
      </button>
      <button 
        className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        <i className="fas fa-language"></i>
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;