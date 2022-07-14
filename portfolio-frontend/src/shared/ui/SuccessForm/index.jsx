import React from "react";

const SuccessForm = ({ isRu }) => {
  const text = "Ваше сообщение успешно отправлено.";
  const textEng = "Your message has been successfully sent.";
  return (
    <>
      <div className="successForm">
        <svg
          width="181"
          height="150"
          viewBox="0 0 181 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="90.5" cy="90.5" r="90.5" fill="#663399" />
          <path
            d="M134.207 58L110.076 84.4215L85.9459 110.843L57.0017 89.7336"
            stroke="white"
            strokeWidth="10"
          />
        </svg>
        <h4 className="successForm__title">{isRu ? "Отлично!" : "Excellent!"}</h4>
        <p className="successForm__text">{isRu ? text : textEng}</p>
      </div>
    </>
  );
};

export default SuccessForm;
