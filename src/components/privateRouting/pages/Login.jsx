import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  const handleLogin = () => {
    const fakeUser = {
      name: "User",
      role: role, // student / admin
    };

    login(fakeUser);

    if (role === "admin") navigate("/admin");
    else navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;