import React, { useState, useCallback } from "react";
import { observer } from "mobx-react-lite";

import { InputField } from "shared/ui";
import { fields } from "../config";
import useGlobalStore from "shared/hooks/useGlobalStore";

const Form = (props) => {
  const { handleSubmitForm } = props;
  const { lang } = useGlobalStore();
  const [formValue, setFormValue] = useState({});

  const handleChange = useCallback((nameField, valueField) => {
    setFormValue((values) => ({ ...values, [nameField]: valueField }));
  }, []);
  const submitForm = (e) => {
    handleSubmitForm(e, formValue);
  };

  return (
    <form className="form">
      <h3>{lang.isRuLang ? "Связаться со мной" : "Contact me"}</h3>
      <div className="form-group">
        {fields.map((el, index) => {
          return (
            <InputField
              key={`${el.name + "_" + index}`}
              placeholder={lang.isRuLang ? el.pl : el.plEng}
              tag={el.name !== "message" ? "input" : "textarea"}
              handleChange={handleChange}
              {...el}
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
          {lang.isRuLang ? "Отправить" : "Send"}
        </button>
      </div>
    </form>
  );
};

export default observer(Form);
