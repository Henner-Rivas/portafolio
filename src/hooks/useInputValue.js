import { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e = "") => setValue(e ? e.target.value : initialValue);
  return [value, onChange];
};

export default useInputValue;
