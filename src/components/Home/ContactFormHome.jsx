import React, { useState } from 'react';

const ContactFormHome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section className="contact-section-modern">
      <div className="contact-header">
        <h2 className="contact-title">
          <i className="fas fa-paper-plane"></i>
          Връзка с мен
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form-modern">
        <div className="form-row-modern">
          <div className="form-group-modern">
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
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group-modern">
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
              disabled={isSubmitting}
            />
          </div>
        </div>
        
        <div className="form-group-modern">
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
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-group-modern">
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
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-btn-modern"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              <span>Изпращане...</span>
            </>
          ) : (
            <>
              <span>Изпрати съобщение</span>
              <i className="fas fa-arrow-right"></i>
            </>
          )}
        </button>
        
        {submitStatus === 'success' && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            Благодаря за съобщението! Ще се свържа с вас скоро.
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactFormHome;