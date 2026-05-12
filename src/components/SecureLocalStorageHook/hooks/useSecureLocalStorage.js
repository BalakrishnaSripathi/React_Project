import { useState } from "react";
import secureLocalStorage from "react-secure-storage";

const useSecureLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = secureLocalStorage.getItem(key);

    if (item !== null) {
      return item;
    }

    secureLocalStorage.setItem(key, initialValue);
    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    secureLocalStorage.setItem(key, value);
  };

  const removeValue = () => {
    secureLocalStorage.removeItem(key);
    setStoredValue(null);
  };

  return [storedValue, setValue, removeValue];
};

export default useSecureLocalStorage;