import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const JwtApp = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div>
      <h1>JWT Auth App</h1>

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Dashboard handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default JwtApp;