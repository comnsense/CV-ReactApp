import React from 'react';

const SoftSkills = () => {
  const softSkills = [
    { icon: 'fa-clock', text: 'Организация и спазване на срокове' },
    { icon: 'fa-keyboard', text: 'Въвеждане и обработка на данни' },
    { icon: 'fa-file-alt', text: 'Работа със счетоводна документация' },
    { icon: 'fa-envelope', text: 'Електронна комуникация' },
    { icon: 'fa-comments', text: 'Онлайн сътрудничество' },
    { icon: 'fa-users', text: 'Поддръжка на потребителски профили' },
    { icon: 'fa-headset', text: 'Техническа поддръжка' },
    { icon: 'fa-laptop', text: 'Работа със специализиран софтуер' }
  ];

  return (
    <section className="soft-skills-container">
      <h2 className="card-title">
      
      </h2>
      <div className="soft-skills-items">
        {softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-item">
            <i className={`fas ${skill.icon}`}></i>
            <span>{skill.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;