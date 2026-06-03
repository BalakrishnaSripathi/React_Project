import { TypeAnimation } from "react-type-animation";

function TypeAnimationApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">

      <div className="bg-white shadow-xl rounded-xl p-10 max-w-4xl w-full">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Type Animation Demo
        </h1>

        {/* What is react-type-animation */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            What is react-type-animation?
          </h2>

          <p>
            A React library used to create typing
            animations for text content.
          </p>

        </div>

        {/* Installation */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-type-animation
          </div>

        </div>

        {/* Where to Use */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Portfolio Websites</li>
            <li>Landing Pages</li>
            <li>Hero Sections</li>
            <li>AI Applications</li>
            <li>Marketing Pages</li>
            <li>SaaS Products</li>
          </ul>

        </div>

        {/* Live Demo */}
        <div className="bg-purple-50 p-8 rounded-lg text-center">

          <h2 className="text-2xl font-bold mb-6">
            Live Typing Animation
          </h2>

          <TypeAnimation
            sequence={[
              "Frontend Developer 👨‍💻",
              2000,
              "React Developer ⚛️",
              2000,
              "Full Stack Developer 🚀",
              2000,
              "UI Developer 🎨",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-4xl font-bold text-blue-600"
          />

        </div>

      </div>

    </div>
  );
}

export default TypeAnimationApp;