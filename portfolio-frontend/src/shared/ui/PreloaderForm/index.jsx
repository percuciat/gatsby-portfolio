import React from "react";

const PreloaderForm = ({ isRu }) => {
  return (
    <>
      <div className="preloaderForm__wrapper">
        <div className="preloaderForm__container">
          <div className="preloaderForm__container-item yellow" />
          <div className="preloaderForm__container-item red" />
          <div className="preloaderForm__container-item blue" />
          <div className="preloaderForm__container-item violet" />
        </div>
        <p>{isRu ? "Сообщение отправляется..." : "Message is sending..."}</p>
      </div>
    </>
  );
};

export default PreloaderForm;
