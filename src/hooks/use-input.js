import {useState} from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  return{
      value: enteredValue,
      hasError,
  }
};

export default useInput;
