import React from "react";
import {
  browserName,
  browserVersion,
  osName,
  deviceType,
  isMobile,
  isTablet,
  isDesktop,
} from "react-device-detect";

function DeviceInfo() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Device Detect Demo
        </h1>

        {/* What is react-device-detect */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            What is react-device-detect?
          </h2>

          <p className="text-gray-700 mb-4">
            react-device-detect is a React library that helps identify
            the user's browser, operating system, and device type.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Device Type (Mobile, Tablet, Desktop)</li>
            <li>Browser Name</li>
            <li>Browser Version</li>
            <li>Operating System</li>
            <li>Android, iPhone, Windows, Mac Detection</li>
          </ul>
        </div>

        {/* How to Install */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg font-mono">
            npm install react-device-detect
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            How to Use
          </h2>

          <p className="mb-4">
            Import the required properties from the package:
          </p>

          <div className="bg-black text-green-400 p-4 rounded-lg text-sm overflow-auto">
{`import {
  browserName,
  browserVersion,
  osName,
  isMobile,
  isDesktop
} from "react-device-detect";`}
          </div>

          <p className="mt-4">
            Then use them directly inside your React component.
          </p>
        </div>

        {/* Where to Use */}
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Mobile-specific layouts</li>
            <li>Desktop-specific dashboards</li>
            <li>Browser compatibility checks</li>
            <li>Analytics applications</li>
            <li>Download pages</li>
            <li>E-commerce websites</li>
            <li>Device-based feature restrictions</li>
            <li>Showing different navigation menus</li>
          </ul>
        </div>

        {/* Live Browser Information */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Live Browser Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Browser Name</h3>
              <p>{browserName}</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Browser Version</h3>
              <p>{browserVersion}</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Operating System</h3>
              <p>{osName}</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Device Type</h3>
              <p>{deviceType || "Desktop"}</p>
            </div>

          </div>
        </div>

        {/* Device Detection */}
        <div className="bg-red-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Device Detection
          </h2>

          {isMobile && (
            <div className="bg-green-500 text-white p-4 rounded-lg">
              📱 Mobile Device Detected
            </div>
          )}

          {isTablet && (
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              📲 Tablet Device Detected
            </div>
          )}

          {isDesktop && (
            <div className="bg-indigo-500 text-white p-4 rounded-lg">
              💻 Desktop Device Detected
            </div>
          )}
        </div>

        {/* Real Project Example */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Real Project Example
          </h2>

          <p className="mb-4">
            Show different buttons for different devices:
          </p>

          {isMobile ? (
            <button className="bg-green-600 text-white px-5 py-3 rounded-lg">
              Download Mobile App
            </button>
          ) : (
            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
              Download Desktop Software
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default DeviceInfo;