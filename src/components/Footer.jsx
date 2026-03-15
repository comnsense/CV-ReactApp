import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <ul className="social-links">
          <li className="social-link">
            <a href="mailto:comnsense17@gmail.com" aria-label="Email" target="_blank" rel="noopener">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className="social-link">
            <a href="https://www.linkedin.com/in/comnsense" aria-label="LinkedIn" target="_blank" rel="noopener">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="social-link">
            <a href="https://github.com/comnsense" aria-label="GitHub" target="_blank" rel="noopener">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="social-link">
            <a href="https://t.me/comnsense88" aria-label="Telegram" target="_blank" rel="noopener">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </li>
        </ul>
      </div>
      <span className="copyright">
        <i className="fas fa-copyright"></i> Мирела Йосифова - 2026
      </span>
    </footer>
  );
};

export default Footer;