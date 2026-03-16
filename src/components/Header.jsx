import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <span className="logo-text">@CV</span>
      </Link>
      
      <nav className="nav">
        <div className="toggle" onClick={toggleMenu}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setMenuActive(false)}
            >
              <i className="fas fa-home"></i>
              <span>Начало</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/schety" 
              className={isActive('/schety') ? 'active' : ''}
              onClick={() => setMenuActive(false)}
            >
              <i className="fas fa-calculator"></i>
              <span>Опит</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/education" 
              className={isActive('/education') ? 'active' : ''}
              onClick={() => setMenuActive(false)}
            >
              <i className="fas fa-graduation-cap"></i>
              <span>Образование</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={isActive('/projects') ? 'active' : ''}
              onClick={() => setMenuActive(false)}
            >
              <i className="fas fa-code"></i>
              <span>Проекти</span>
            </Link>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;