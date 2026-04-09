export default function OnlineStatusCode() {
    const code = `

import { useState, useEffect } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}





import React from "react";
import { useOnlineStatus } from "./useOnlineStatus";

function StatusComponent() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>Network Status</h2>
      {isOnline ? (
        <p style={{ color: "green" }}>🟢 You are Online</p>
      ) : (
        <p style={{ color: "red" }}>🔴 You are Offline</p>
      )}
    </div>
  );
}

export default StatusComponent;
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
