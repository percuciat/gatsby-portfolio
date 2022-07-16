import React, { useState, useCallback } from "react";
import { InputField } from "shared/ui/";

const Form = ({ isRu, handleSubmitForm }) => {
  const fields = [
    { name: "name", type: "text", pl: "Ваше имя", plEng: "Your name" },
    { name: "email", type: "email", pl: "Электронная почта", plEng: "E-Mail" },
    { name: "message", type: "text", pl: "Сообщение", plEng: "Your message" },
  ];
  const [formValue, setFormValue] = useState({});

  const handleChange = useCallback((nameField, valueField) => {
    setFormValue((values) => ({ ...values, [nameField]: valueField }));
  }, []);
  const submitForm = (e) => {
    handleSubmitForm(e, formValue);
  };

  return (
    <form className="form">
      <h3>{isRu ? "Связаться со мной" : "Contact me"}</h3>
      <div className="form-group">
        {fields.map((f, index) => {
          return (
            <InputField
              key={`${f.name + "_" + index}`}
              placeholder={isRu ? f.pl : f.plEng}
              tag={f.name !== "message" ? "input" : "textarea"}
              handleChange={handleChange}
              {...f}
            />
          );
        })}
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <button
          type="submit"
          className="form-btn btn"
          onClick={submitForm}
          disabled={Object.values(formValue).includes("")}
        >
          {isRu ? "Отправить" : "Send"}
        </button>
      </div>
    </form>
  );
};

export default Form;
