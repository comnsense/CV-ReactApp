import React from 'react';
// import { Link } from 'react-router-dom';  // Link не се използва, може да се премахне

const EducationSection = () => {
  return (
    <section id="education" className="cards-container">
      <div className="info-card">
        <h2 className="card-title">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23306788' stroke-width='2'%3E%3Cpath d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'%3E%3C/path%3E%3Cpath d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'%3E%3C/path%3E%3C/svg%3E" 
            alt=""
          />
          Образование
        </h2>

        <div className="education-item">
          <div className="item-header">
            <span className="item-title">Средно образование</span>
            <span className="item-date">2011 – 2016</span>
          </div>
          <div className="item-subtitle">Профилирана гимназия по чужди езици „Проф. д-р Асен Златаров“ - Велико Търново</div>
          <div className="item-details">Чуждоезиково обучение – английски и немски език</div>
        </div>

        <div className="education-item">      
          <div className="item-header">
            <span className="item-title">Бакалавър по компютърни науки</span>
            <span className="item-date">2019 – 2024</span>
          </div>
          <div className="item-subtitle">Варненски свободен университет „Черноризец Храбър“</div>
          <div className="item-details">
            <p>Сфера на обучение: Информатика и Компютърни науки</p>
            <p>Последна придобита степен: много добър (5.02) | ниво по ЕКР: ниво 6</p>
            <p>Вид учебни кредити: ECTS кредити | брой кредити: 240</p>
            <p>Дипломна работа: <a href="/pdfs/thesis.pdf" className="hyperlink" target="_blank" rel="noopener noreferrer">Разработка на виртуален асистент с изкуствен интелект</a></p>
       
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/pdfs/Диплома.pdf" className="hyperlink" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-pdf"></i> Диплома.pdf 
              </a>
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
};

export default EducationSection;