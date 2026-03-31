import React, { useState, useEffect } from "react";

export default function UseLocalStorageApp() {
  const [name, setName] = useState(() => {
    const stored = localStorage.getItem("username");
    return stored ? JSON.parse(stored) : "";
  });

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(name));
  }, [name]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple useLocalStorage Example</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {name}</p>
    </div>
  );
}
