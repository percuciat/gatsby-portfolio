import React from 'react';

const PreloaderForm = (props) => {
  return <>
    <div className="preloader__wrapper">
      <div className="preloader__container">
        <div className="preloader__container-item yellow" />
        <div className="preloader__container-item red" />
        <div className="preloader__container-item blue" />
        <div className="preloader__container-item violet" />
      </div>
      <p>Сообщение отправляется!</p>
    </div>
    </>
};


export default PreloaderForm;
