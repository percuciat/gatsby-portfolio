import React from "react";
import useFormValidation from "../../../hooks/useFormValidation";


const InputField = (props) => {
  const { type, name, placeholder, handleChange, tag: Tag } = props;
  const [valueField, setValueField] = React.useState('');

  let isValidField = useFormValidation(name, valueField);

  React.useEffect(() => {
    handleChange(name, isValidField ? valueField : '')
  }, [valueField, handleChange, name, isValidField]);


  return (
    <Tag type={type}
           name={name}
           placeholder={placeholder}
           className={`${isValidField ? 'valid' : 'noValid'} contact__form-input`}
           required
           onChange={(e) => setValueField(e.target.value)}
    />
  );
};

export default React.memo(InputField)
