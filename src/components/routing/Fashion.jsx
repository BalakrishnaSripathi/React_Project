import { Outlet, Link } from "react-router-dom";

const Fashion = () => {
  return (
    <div>
      <h2>Fashion Page</h2>

      <Link to="footwear">Go to Footwear</Link>

      <br /><br />

      <Link to="footwear/101">Footwear ID 101</Link>

      <Outlet />
    </div>
  );
};

export default Fashion;