import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

export default function UseDebounceApp() {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedValue) {
      console.log("API Call:", debouncedValue);

      // Example API
      fetch(`https://jsonplaceholder.typicode.com/users?name=${debouncedValue}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, [debouncedValue]);

  return (
    <div className="p-5">
      <h2>Debounce Example</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
