import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function GoogleApp() {
  const handleSuccess = (credentialResponse) => {
    console.log("Google Payload:", credentialResponse);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex justify-center items-center h-screen">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleApp;