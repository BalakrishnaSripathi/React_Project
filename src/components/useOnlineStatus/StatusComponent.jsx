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