import { useState } from 'react';

function useInputValidetion(initionValue) {
  const [value, setValue] = useState(initionValue);

  const isValueValid = (minLength, maxLength) => {
    if (!value.length) return 'Поле обов\'язково має бути заповнене';
    if (value.length < minLength) return `Назва повина бути не менш ${minLength} символів`;
    if (value.length > maxLength) return `Назва повина бути не більш ${maxLength} символів`;

    return true;
  };

  return [value, setValue, isValueValid];
}

export default useInputValidetion;
