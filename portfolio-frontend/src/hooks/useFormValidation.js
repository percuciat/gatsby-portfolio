export default function useFormValidation(fieldName, fieldValue) {
  const emailRegExp = new RegExp('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$');
  switch(fieldName) {
    case 'name':
      return fieldValue.length >= 3 && fieldValue.length <= 20;
    case 'email':
      let str = fieldValue.split('.');
      let a = str[str.length - 1];
      return a.length <= 3 && fieldValue.length <= 30 && emailRegExp.test(fieldValue);
    case 'message':
     return fieldValue.length >= 6;
    default:
      break;
  }
}

