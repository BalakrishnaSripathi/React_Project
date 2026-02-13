import { useState } from "react";
import WithAuth from "./WithAuth";
import WithDarkMod from "./WithDarkMod";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

const Dashboard = () => {
  return <div>Your Dashboard</div>;
};

const AuthDashboard = WithAuth(Dashboard);

function App1({ isDark, setIsDark }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className="min-h-screen">

      <div className="flex justify-end p-3">
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? <LightModeIcon /> : <NightlightIcon />}
        </button>
      </div>

      <div className="border-2 mx-4 sm:mx-20 md:mx-40 mt-20 p-6 rounded-lg">

        <div
          className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl text-center h-24">
        
          <AuthDashboard isAuthenticated={isAuthenticated} />
        </div>

        
        <div
          className="flex justify-center items-center gap-6 mt-6">
        
          <button
            className="bg-green-600 hover:bg-green-700 text-white 
                       px-6 py-2 rounded-3 active:scale-95 transition"
            onClick={() => setIsAuthenticated(true)}
          >
            Login
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 text-white 
                       px-6 py-2 rounded-3 active:scale-95 transition"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

function WrappedApp() {
  const [isDark, setIsDark] = useState(false);
  const DarkApp = WithDarkMod(App1);

  return <DarkApp isDark={isDark} setIsDark={setIsDark} />;
}

export default WrappedApp;
