import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Admin = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome admin</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Admin;