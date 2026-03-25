import { useNavigate } from "react-router-dom";

const Electronics = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Electronics Page</h2>

      <button onClick={() => navigate("/fashion")}>
        Go to Fashion
      </button>

      <br /><br />

      <button
        onClick={() =>
          navigate("/fashion/footwear", {
            state: { name: "Nike Shoes", price: 2000 }
          })
        }
      >
        Go to Footwear (with state)
      </button>
    </div>
  );
};

export default Electronics;