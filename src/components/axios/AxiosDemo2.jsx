import { useEffect, useState } from "react";
import axios from "axios";

function AxiosDemo2() {
  const [users, setUsers] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  // 🔹 GET
  const getUsers = async () => {
    const res = await axios.get(baseURL);
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // 🔹 POST (Update UI manually)
  const addUser = async () => {
    const res = await axios.post(baseURL, {
      name: "Sripathi",
      email: "sripathi@gmail.com",
    });

    // Add new user to UI
    setUsers((prev) => [...prev, res.data]);
  };

  // 🔹 PUT (Update UI manually)
  const updateUser = async (id) => {
    const res = await axios.put(`${baseURL}/${id}`, {
      id,
      name: "Updated Name",
      email: "updated@gmail.com",
    });

    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? res.data : user
      )
    );
  };

  // 🔹 DELETE (Remove from UI manually)
  const deleteUser = async (id) => {
    await axios.delete(`${baseURL}/${id}`);

    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  };

  return (
    <div>
      <h2>Users</h2>
      <button onClick={addUser}>Add User</button>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => updateUser(user.id)}>
            Update
          </button>
          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AxiosDemo2;
