import { useParams, useLocation } from "react-router-dom";

const Footwear = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div>
      <h3>Footwear Page</h3>

      {/* Route Param */}
      {id && <p>Product ID: {id}</p>}

      {/* State Data */}
      {location.state && (
        <>
          <p>Name: {location.state.name}</p>
          <p>Price: ₹{location.state.price}</p>
        </>
      )}
    </div>
  );
};

export default Footwear;