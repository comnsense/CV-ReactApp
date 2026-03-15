import React from 'react';

const PdfLinks = ({ currentLang }) => {
  return (
    <div className="pdf-links">
      <a href="/pdfs/Диплома.pdf" className="pdf-link" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-file-pdf"></i>
        <span>{currentLang === 'bg' ? 'Диплома' : 'Diploma'}</span>
        <i className="fas fa-external-link-alt"></i>
      </a>
      <a href="/pdfs/thesis.pdf" className="pdf-link" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-file-pdf"></i>
        <span>{currentLang === 'bg' ? 'Дипломна работа' : 'Thesis'}</span>
        <i className="fas fa-external-link-alt"></i>
      </a>
      <a href="/pdfs/Qualification Profile.pdf" className="pdf-link" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-file-pdf"></i>
        <span>{currentLang === 'bg' ? 'Квалификационна характеристика' : 'Qualification Profile'}</span>
        <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  );
};

export default PdfLinks;