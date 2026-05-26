import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeExample() {
  // Hook -> useState
  // It stores and updates the QR text dynamically
  const [text, setText] = useState("Hello React QR Code 🚀");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
        color: "#fff",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h1>react-qr-code Example</h1>

      {/* Input Field */}
      <input
      className="bg-amber-100 text-black"
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />

      {/* QR Code */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <QRCode value={text} size={220} />
      </div>

      {/* Hook Working Display */}
      <div
        style={{
          background: "#222",
          padding: "15px",
          borderRadius: "10px",
          width: "320px",
        }}
      >
        <h3>Hook Working</h3>

        <p>
          <strong>Current State Value:</strong>
        </p>

        <p>{text}</p>

        <p>
          useState hook updates this value instantly and QR code changes
          automatically.
        </p>
      </div>

      {/* Importance */}
      <div
        style={{
          background: "#1b1b1b",
          padding: "15px",
          borderRadius: "10px",
          width: "500px",
        }}
      >
        <h3>Why react-qr-code is Important?</h3>

        <ul>
          <li>Generate QR codes dynamically</li>
          <li>Used for payments, URLs, tickets, sharing data</li>
          <li>Very lightweight package</li>
          <li>Easy React integration</li>
          <li>Updates instantly with React state/hooks</li>
        </ul>
      </div>
    </div>
  );
}