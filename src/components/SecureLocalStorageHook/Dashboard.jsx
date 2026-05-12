import React, { useState } from "react";
import useSecureLocalStorage from "./hooks/useSecureLocalStorage";
import useSessionStorage from "./hooks/useSessionStorage";

const Dashboard = () => {
  const [name, setName] = useState("");

  // Secure Local Storage
  const [user, setUser, removeUser] = useSecureLocalStorage(
    "user",
    "No User"
  );

  // Session Storage
  const [theme, setTheme, removeTheme] = useSessionStorage(
    "theme",
    "light"
  );

  const handleSave = () => {
    setUser(name);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-[400px]">
        <h1 className="text-2xl font-bold mb-5">
          Storage Hooks Project
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 rounded mb-4"
        />

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Save User
        </button>

        <div className="mt-5">
          <p className="mb-2">
            <strong>Secure LocalStorage User:</strong> {user}
          </p>

          <button
            onClick={removeUser}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove User
          </button>
        </div>

        <div className="mt-6">
          <p className="mb-2">
            <strong>Theme:</strong> {theme}
          </p>

          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Toggle Theme
          </button>

          <button
            onClick={removeTheme}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;