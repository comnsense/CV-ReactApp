import React from 'react';

const ProfileSection = () => {
  return (
    <section id="about" className="profile-section">
      <div className="profile-info">
        <h1>Мирела Йосифова</h1>
        <p className="section-description">
          Имам опит в обслужване и комуникация с клиенти, поддръжка и
          администриране на бизнес платформи, както и консултиране на крайни потребители
          при оперативни и технически казуси. Работя организирано, с внимание към детайла и
          стремеж към точност.
        </p>
        <p>
          Тригодишната ми практика в счетоводството изгради дисциплина при работа с
          финансови данни и задълбочено разбиране за бизнес процесите.
        </p>
      </div>
      
      <div className="contact-info">
        <h3><i className="fas fa-address-card"></i> За контакти</h3>
        
        <div className="contact-details">
          <p><i className="fas fa-map-pin"></i> ж.к. Дианабад, 53, 1172 София, България</p>
          <p>
            <a href="mailto:comnsense17@gmail.com">
              <i className="fas fa-envelope"></i> comnsense17@gmail.com
            </a>
          </p>
          <p><i className="fas fa-phone-alt"></i> (+359) 877359073</p>
        </div>

        <div className="personal-details">
          <h4><i className="fas fa-id-card"></i> Лични данни</h4>
          <p><i className="fas fa-id-card"></i> Лична карта: 652371997</p>
          <p><i className="fas fa-calendar-alt"></i> Дата на раждане: 05.03.1997</p>
          <p><i className="fas fa-map-marker-alt"></i> Място на раждане: Велико Търново, България</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;