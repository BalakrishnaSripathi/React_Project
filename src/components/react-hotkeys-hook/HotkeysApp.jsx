import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

function HotkeysApp() {
  const [message, setMessage] = useState(
    "Press any shortcut below"
  );

  // Ctrl + S
  useHotkeys("ctrl+s", (e) => {
    e.preventDefault();
    setMessage("💾 Data Saved");
  });

  // Ctrl + K
  useHotkeys("ctrl+k", (e) => {
    e.preventDefault();
    setMessage("🔍 Search Opened");
  });

  // Ctrl + Z
  useHotkeys("ctrl+z", (e) => {
    e.preventDefault();
    setMessage("↩️ Undo Action");
  });

  // Escape
  useHotkeys("esc", () => {
    setMessage("❌ Modal Closed");
  });

  // Enter
  useHotkeys("enter", () => {
    setMessage("✅ Form Submitted");
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Hotkeys Hook Demo
        </h1>

        {/* What is react-hotkeys-hook */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            What is react-hotkeys-hook?
          </h2>

          <p>
            A React hook for handling keyboard shortcuts
            and hotkeys in applications.
          </p>
        </div>

        {/* Install */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-hotkeys-hook
          </div>
        </div>

        {/* Where to Use */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Admin Dashboards</li>
            <li>Text Editors</li>
            <li>Chat Applications</li>
            <li>CRM Systems</li>
            <li>Search Components</li>
            <li>Project Management Tools</li>
          </ul>
        </div>

        {/* Shortcuts */}
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Available Shortcuts
          </h2>

          <ul className="space-y-2">
            <li>Ctrl + S → Save Data</li>
            <li>Ctrl + K → Open Search</li>
            <li>Ctrl + Z → Undo</li>
            <li>Esc → Close Modal</li>
            <li>Enter → Submit Form</li>
          </ul>
        </div>

        {/* Result */}
        <div className="bg-indigo-50 p-6 rounded-lg">

          <h2 className="text-2xl font-bold mb-4">
            Action Result
          </h2>

          <p className="text-xl font-semibold">
            {message}
          </p>

        </div>

      </div>

    </div>
  );
}

export default HotkeysApp;