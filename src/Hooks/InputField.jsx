import { useState } from "react";

const useInputField = (defaultValue) => {
  const [InputValue, setInputValue] = useState(defaultValue);
  const handleOnChange = (e)=>{
    setInputValue(e.target.value)
  }
  return [InputValue, handleOnChange]
};

export default useInputField;
