import { useState } from "react";

const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = sessionStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const removeValue = () => {
    sessionStorage.removeItem(key);
    setStoredValue(null);
  };

  return [storedValue, setValue, removeValue];
};

export default useSessionStorage;