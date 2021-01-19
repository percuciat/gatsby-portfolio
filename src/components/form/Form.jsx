import React from "react"
import { SuccessForm, FieldsForm, PreloaderForm } from '../../components'

const Form = ({ handleSubmitForm, answer }) => {
  const emailRegExp = new RegExp('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$');
  const [formValue, setFormValue] = React.useState({});
  const [formValid, setFormValid] = React.useState({
    nameValid: false,
    emailValid: false,
    messageValid: false,
  });

  const handleChange = (event) => {
    event.persist();
    setFormValue(values => ({ ...values, [event.target.name]: event.target.value }));
    validation(event.target.name, event.target.value);
  };

  const validation = (fieldName, fieldValue) => {
    let { nameValid, emailValid, messageValid } = formValid;
    switch(fieldName) {
      case 'name':
        nameValid = fieldValue.length >= 3;
        setFormValid((state) => {
          return {
            ...state,
            nameValid
          }
        });
        break;
      case 'email':
        emailValid = emailRegExp.test(fieldValue);
        setFormValid((state) => {
          return {
            ...state,
            emailValid
          }
        });
        break;
      case 'message':
        messageValid = fieldValue.length >= 6;
        setFormValid((state) => {
          return {
            ...state,
            messageValid
          }
        });
        break;
      default:
        break;
    }
  };
  return <>

    { answer === false && <FieldsForm handleSubmitForm={handleSubmitForm}
                                       dataSend={formValue}
                                       dataValidForm={formValid}
                                       handleChange={handleChange}/>}
    { answer === 'sending' &&  <PreloaderForm /> }
    { answer === true &&  <SuccessForm /> }
    { answer === 'error' &&  (
      <div>
        <p>Sorry, error is happened <span role="img" aria-label="error">😔</span></p>
        <p>try again, please</p>
      </div>
    ) }
  </>
};


export default Form
