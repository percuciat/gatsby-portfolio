import React from "react";

const ErrorForm = ({ isRu }) => {
  const text = "Произошла ошибка при отправке...";
  const textEng = "Sorry, error has happened...";
  return (
    <div className="errorMsg">
      <p className="errorMsg__text">
        {isRu ? text : textEng}{" "}
        <span role="img" aria-label="error">
          😔
        </span>
      </p>
    </div>
  );
};

export default ErrorForm;
