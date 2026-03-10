import React, { useReducer } from "react";
import { authReducer, initialState } from "./authReducer";
import ReducerDemo from "./ReducerDemo";

function LoginStatus() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <div>
      <h2>
        {state.isLoggedIn ? "User Logged In" : "User Logged Out"}
      </h2>

      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "LOGIN" })}>
        Login
      </button>

      <button className="btn btn-outline-danger" onClick={() => dispatch({ type: "LOGOUT" })}>
        Logout
      </button>
      {state.isLoggedIn && <ReducerDemo />}
    </div>
  );
}

export default LoginStatus;