import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
  }, []);

  const setTheme = (themeName) => {
    document.body.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    setIsDark(themeName === 'dark');
    
    const colorDots = document.querySelectorAll('.color-dot');
    colorDots.forEach(dot => dot.classList.remove('active'));
    
    const activeDot = document.querySelector(`.dot-${themeName}`);
    if (activeDot) activeDot.classList.add('active');
  };

  return (
    <div className="theme-preview">
      <div 
        className={`color-dot dot-dark ${!isDark ? '' : 'active'}`} 
        onClick={() => setTheme('dark')} 
        title="Тъмна тема"
      ></div> 
      <div 
        className={`color-dot dot-light ${isDark ? '' : 'active'}`} 
        onClick={() => setTheme('light')} 
        title="Светла тема"
      ></div>
    </div>
  );
};

export default ThemeToggle;