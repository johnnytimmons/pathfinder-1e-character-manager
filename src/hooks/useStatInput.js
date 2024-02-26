//useStatInput.js
import { useState } from "react";

const useStatInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [modifier, setModifier] = useState(Math.floor((initialValue - 10) / 2));

  const handleChange = (newValue) => {
    setValue(newValue);
    setModifier(Math.floor((newValue - 10) / 2));
  };

  return {
    value,
    modifier,
    onChange: handleChange,
  };
};

export default useStatInput;
