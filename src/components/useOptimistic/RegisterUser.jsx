import React, { useState, useOptimistic } from "react";

const RegisterUser = () => {
  const [users, setUsers] = useState([]);

  const [optimisticUsers, addOptimisticUser] = useOptimistic(
    users,
    (currentUsers, newUser) => [...currentUsers, newUser]
  );

  const [formData, setFormData] = useState({
    UserId: "",
    UserName: "",
    Password: "",
    Age: "",
    Mobile: "",
    Subscribed: false
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const optimisticUser = {
      _id: Date.now().toString(),
      ...formData,
      sending: true
    };

    
    addOptimisticUser(optimisticUser);

    try {
      const res = await fetch("http://127.0.0.1:4000/registeruser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const savedUser = await res.json();

      
      setUsers(prev => [...prev, savedUser]);

    } catch (err) {
      console.log("Registration failed");
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Register User</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="UserName" placeholder="Name" onChange={handleChange} className="border p-2 w-full" />
        <input name="UserId" placeholder="UserId" onChange={handleChange} className="border p-2 w-full" />
        <input name="Password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" />
        <input name="Age" placeholder="Age" onChange={handleChange} className="border p-2 w-full" />
        <input name="Mobile" placeholder="Mobile" onChange={handleChange} className="border p-2 w-full" />
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>

      <h3 className="mt-6 font-bold">Users List</h3>

      {optimisticUsers.map(user => (
        <div key={user._id} className="border p-3 mt-2">
          {user.UserName} {user.sending && "(Registering...)"}
        </div>
      ))}
    </div>
  );
};

export default RegisterUser;