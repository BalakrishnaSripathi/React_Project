import React, { useState } from 'react';

const Dashboard = ({ handleLogout }) => {
  const [data, setData] = useState(null);

  const fetchAttendance = async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:3000/student-attendance', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const result = await res.json();

      if (res.status === 200) {
        setData(result);
      } else {
        alert(result.message || 'Access denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Faculty Dashboard</h2>

      <button onClick={fetchAttendance}>Get Attendance</button>
      <button onClick={handleLogout}>Logout</button>

      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Dashboard;