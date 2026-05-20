import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  // useState hook to store input text
  const [text, setText] = useState("Hello World");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>QR Code Generator</h2>
      
      {/* Input field controlled by useState */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for QR code"
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      {/* QR Code updates automatically when state changes */}
      <QRCode value={text} size={200} />
    </div>
  );
};

export default QRCodeGenerator;
