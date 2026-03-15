import React from 'react';

const SocialLinks = () => {
  return (
    <ul className="social-links">
      <li className="social-link">
        <a href="mailto:comnsense17@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </li>
      <li className="social-link">
        <a href="https://www.linkedin.com/in/comnsense" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li className="social-link">
        <a href="https://github.com/comnsense" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li className="social-link">
        <a href="https://t.me/comnsense88" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;