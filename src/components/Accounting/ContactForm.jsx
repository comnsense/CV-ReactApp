import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="section contact-section">
      <div className="section-title">
        <i className="fas fa-envelope"></i>
        <h2>Връзка с мен</h2>
      </div>
      
      <form action="https://formspree.io/f/mpqjgeve" method="POST" className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              <i className="fas fa-user"></i>
              <span>Име *</span>
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Вашето име" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
              <span>Имейл *</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="your@email.com" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="company">
            <i className="fas fa-building"></i>
            <span>Дружество/Фирма</span>
          </label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            placeholder="Име на фирма (по желание)"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">
            <i className="fas fa-comment"></i>
            <span>Съобщение *</span>
          </label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            placeholder="Вашето съобщение..." 
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <input type="hidden" name="_next" value="https://comnsense.github.io/experiment626/thank-you.html" />
        <input type="hidden" name="_subject" value="Ново съобщение от счетоводния профил" />
        
        <button type="submit" className="submit-btn">
          <i className="fas fa-paper-plane"></i>
          <span>Изпрати съобщение</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;