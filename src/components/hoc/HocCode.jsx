export default function HocCode() {
    const code = `
component and renders it only if the user is authenticated.
-------------------------------------------------------------------
const WithAuth=(Component)=>{
    return function WrappedComponent(props) {
    const { isAuthenticated } = props;
    if (isAuthenticated){
        return (
        <Component {...props}/>
    )
        }
        else{
            return <p>Please login to Access</p>
        }
}
}

export default WithAuth;

A component and dynamically applies light or dark theme styles based on the isDark prop.
----------------------------------------------------------------------------------------

const WithDarkMod = (Component) => {
  return function DarkModeWrapper(props) {
    const { isDark } = props;

    const styles = {
      backgroundColor: isDark ? "#212529" : "#ffffff",
      color: isDark ? "#ffffff" : "#000000",
      height: "100vh",
      transition: "0.3s",
    };

    return (
      <div style={styles}>
        <Component {...props} />
      </div>
    );
  };
};

export default WithDarkMod;



import { useState } from "react";
import WithAuth from "./WithAuth";
import WithDarkMod from "./WithDarkMod";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const Dashboard = () => {
  return <div>Your Dashboard</div>;
};

const AuthDashboard = WithAuth(Dashboard);

function App({ isDark, setIsDark }) {
const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
    
      <div className="flex justify-end m-2">
       <button
          onClick={() => setIsDark(!isDark)}
          className="transition"
        >

          {isDark ? <LightModeIcon /> : <NightlightIcon />}
      </button>
      </div>
      <div className="border-2 border-blue-1000 mx-40 mt-40 h-60 rounded-lg">

  <div className="flex justify-center items-center text-4xl mt-10">
    <AuthDashboard isAuthenticated={isAuthenticated} />
  </div>

  <div className="flex justify-center items-center gap-6 text-2xl mt-10">
    
    <button 
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-3 active:scale-95 transition "
      onClick={() => setIsAuthenticated(true)}
    >
      Login
    </button>

    <button 
      className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-3 active:scale-95 transition"
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
  const DarkApp = WithDarkMod(App);

  return <DarkApp isDark={isDark} setIsDark={setIsDark} />;
}

export default WrappedApp;


`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
