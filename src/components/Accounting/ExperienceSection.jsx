import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceSection = () => {
  return (
    <section id="experience" className="cards-container">
      <div className="info-card">
        <h2 className="card-title">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23306788' stroke-width='2'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cpath d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'%3E%3C/path%3E%3C/svg%3E" 
            alt=""
          />
          Трудов опит
        </h2>


        <div className="experience-item">
          <div className="item-header">
            <span className="item-title">Счетоводни услуги по граждански договор</span>
            <span className="item-date">2024 – до момента</span>
          </div>
          <div className="item-subtitle">Верина Ем ЕООД - София, България</div>
          <div className="item-details">
            <ul>
              <li>Осчетоводяване на първични и вторични счетоводни документи</li> 
              <li>Обработка на банкови транзакции и касови операции</li> 
              <li>Изготвяне и осчетоводяване на първични и вторични счетоводни документи, свързани с дейността на компанията</li> 
              <li>Изготвяне на ГФО съгласно НСС</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="item-header">
            <span className="item-title">Оперативен счетоводител</span>
            <span className="item-date">2025 – 2026</span>
          </div>
          <div className="item-subtitle">Ди Ти Ес Груп ЕООД - София</div>
          <div className="item-details">
            <ul>
              <li>Изготвя и осчетоводява първични и вторични счетоводни документи</li>
              <li>Изготвяне на ДДС декларации</li>
              <li>Осчетоводяване на разходи и ведомости за заплати</li>
              <li>Участие в изготвяне на годишни финансови отчети и годишни данъчни декларации</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="item-header">                        
            <span className="item-title">Компютърен оператор</span>
            <span className="item-date">08/2023 – 12/2024</span>
          </div>
          <div className="item-details">
            <ul>
              <li>Поддържане на информация в CRM система</li>
              <li>Въвеждане на данни от клиентски заявки</li>
              <li>Проследяване на плащания и задължения</li> 
              <li>Поддържане на кореспонденция с клиенти и доставчици за нуждите на счетоводната дейност</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="item-header">                        
            <span className="item-title">Консултант, поддръжка на софтуер</span>
            <span className="item-date">07/2024</span>
          </div>
          <div className="item-subtitle">Теза ООД - София, България</div>
          <div className="item-details">
            <p>Уебсайт: <a href="https://www.b2match.com/" className="hyperlink" target="_blank" rel="noopener noreferrer">https://www.b2match.com/</a></p>
            <ul>
              <li>Поддръжка на B2B платформа</li>
              <li>Потребителска поддръжка</li>
              <li>Управление на профили</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;