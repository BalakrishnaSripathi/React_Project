import { Outlet, Link } from "react-router-dom";

const RouteApp = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Electronics</Link>
        <Link to="/fashion">Fashion</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default RouteApp;