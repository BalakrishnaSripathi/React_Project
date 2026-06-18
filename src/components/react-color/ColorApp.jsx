import { useState } from "react";
import { SketchPicker } from "react-color";

function ColorApp() {
  const [color, setColor] = useState("#2563eb");

  const handleColorChange = (updatedColor) => {
    setColor(updatedColor.hex);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Color Picker Demo
        </h1>

        {/* What is react-color */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            What is react-color?
          </h2>

          <p>
            react-color provides customizable color
            picker components for React applications.
          </p>

        </div>

        {/* Installation */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-color
          </div>

        </div>

        {/* Color Picker */}
        <div className="flex flex-col lg:flex-row gap-8">

          <div>
            <h2 className="text-xl font-bold mb-4">
              Select Color
            </h2>

            <SketchPicker
              color={color}
              onChange={handleColorChange}
            />
          </div>

          <div className="flex-1">

            <h2 className="text-xl font-bold mb-4">
              Live Preview
            </h2>

            <div
              className="h-64 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold"
              style={{
                backgroundColor: color,
              }}
            >
              {color}
            </div>

          </div>

        </div>

        {/* Current Color Details */}
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Selected Color
          </h2>

          <p className="text-lg">
            HEX Value:
            <span className="font-bold ml-2">
              {color}
            </span>
          </p>

        </div>

        {/* Use Cases */}
        <div className="bg-purple-50 p-6 rounded-lg mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Theme Settings</li>
            <li>Logo Design Tools</li>
            <li>Dashboard Customization</li>
            <li>Website Builders</li>
            <li>Brand Color Selection</li>
            <li>UI Editors</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default ColorApp;