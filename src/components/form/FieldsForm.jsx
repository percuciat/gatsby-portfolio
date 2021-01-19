import React from 'react';
import PropTypes from 'prop-types';

const FieldsForm = ({handleSubmitForm, dataSend, dataValidForm, handleChange}) => {
  return (
    <form>
      <h3>Связаться со мной</h3>
      <div className="contact__form-group">
        <input type="text"
               name="name"
               placeholder="Ваше имя"
               className={`${dataValidForm.nameValid ? 'valid' : 'noValid'} contact__form-input`}
               required
               onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="Электронная почта"
          name="email"
          required
          className={`${dataValidForm.emailValid ? 'valid' : 'noValid'} contact__form-input`}
          onChange={(e) => handleChange(e)}
        />
        <input type="text" name="_gotcha" style={{display: 'none'}} />
        <textarea
          name="message"
          placeholder="Сообщение"
          className={`${dataValidForm.messageValid ? 'valid' : 'noValid'} contact__form-input`}
          required
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="contact__form-btn btn"
                onClick={(e) => {
                  if (dataValidForm.nameValid && dataValidForm.emailValid && dataValidForm.messageValid){
                    return handleSubmitForm(e, dataSend)
                  }
                }}
                disabled={!(dataValidForm.nameValid && dataValidForm.emailValid && dataValidForm.messageValid)}>
          Отправить
        </button>
      </div>
    </form>
  );
};

FieldsForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  dataValidForm: PropTypes.object.isRequired,
};
FieldsForm.defaultProps = {
  dataValidForm: {}
};

export default FieldsForm;
