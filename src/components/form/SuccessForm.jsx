import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const SuccessForm = () => {
  return (
    <div className="success">
      <svg width="181" height="181" viewBox="0 0 181 181" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90.5" cy="90.5" r="90.5" fill="#663399"/>
        <path d="M134.207 58L110.076 84.4215L85.9459 110.843L57.0017 89.7336" stroke="white" strokeWidth="10"/>
      </svg>
      <h4 className="success__title">Отлично!</h4>
      <p className="success__text">Ваше сообщение успешно отправлено!</p>
      <AniLink swipe direction="right" className="btn" to="/projects">Посмотреть портфолио</AniLink>
    </div>
  )
};

export default SuccessForm