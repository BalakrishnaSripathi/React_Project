import { useMediaQuery } from "@mui/material";

function App() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="p-5">
        <h2>useMediaQuery Hook</h2>
      {isMobile ? (
        <button className="bg-blue-500 text-white p-2">
          Mobile Button
        </button>
      ) : (
        <button className="bg-green-500 text-white p-4">
          Desktop Button
        </button>
      )}
    </div>
  );
}

export default App;