import { useState, useEffect } from "react";

export const useCheckValidation = (validationFunc) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (value.length > 0 && validationFunc(value)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [value, validationFunc]);

  return {
    value,
    error,
    setValue,
  };
};