import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function ConfettiApp() {

  // Hook
  // Controls confetti show/hide
  const [showConfetti, setShowConfetti] = useState(false);

  // Stores browser width
  const [width, setWidth] = useState(window.innerWidth);

  // Stores browser height
  const [height, setHeight] = useState(window.innerHeight);

  // Detect browser screen resize
  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  // Start Confetti
  const startConfetti = () => {

    setShowConfetti(true);

    // Stop after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 9000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      {/* Confetti Component */}
      {showConfetti && (

        <Confetti

          // Browser full width
          width={width}

          // Browser full height
          height={height*3}

          // Number of pieces
          numberOfPieces={900}

          // Gravity speed
          gravity={0.2}

        />

      )}

      {/* Main Card */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl relative z-10">

        <h1 className="text-3xl font-bold text-center text-pink-600 mb-4">
          React Confetti Example
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Celebration animation using react-confetti
        </p>

        {/* Install */}
        <div className="bg-black text-green-400 p-4 rounded-lg mb-5 overflow-auto">
          <p className="font-bold mb-2">
            Install:
          </p>

          <code>
            npm install react-confetti
          </code>
        </div>

        {/* Import */}
        <div className="bg-gray-100 p-4 rounded-lg mb-5 overflow-auto">
          <p className="font-bold mb-2">
            Import:
          </p>

          <code>
            import Confetti from "react-confetti";
          </code>
        </div>

        {/* Why Use */}
        <div className="bg-pink-50 p-4 rounded-lg mb-5">

          <h2 className="font-bold text-lg text-pink-700 mb-3">
            Where To Use
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Quiz Winner Screen</li>
            <li>• Payment Success</li>
            <li>• Game Victory</li>
            <li>• Form Submission Success</li>
            <li>• Birthday Celebration</li>
            <li>• Course Completion</li>
            <li>• Ecommerce Order Success</li>
          </ul>

        </div>

        {/* Hooks */}
        <div className="bg-green-50 p-4 rounded-lg mb-5">

          <h2 className="font-bold text-lg text-green-700 mb-3">
            Hooks Used
          </h2>

          <div className="space-y-3 text-gray-700">

            <div>
              <code>
                useState(false)
              </code>

              <p>
                Controls confetti visibility
              </p>
            </div>

            <div>
              <code>
                useEffect()
              </code>

              <p>
                Detects browser resize
              </p>
            </div>

          </div>

        </div>

        {/* Browser Output */}
        <div className="bg-yellow-50 p-4 rounded-lg mb-5">

          <h2 className="font-bold text-lg text-yellow-700 mb-3">
            Browser Output Flow
          </h2>

          <div className="space-y-2 text-gray-700">
            <p>1. Click Celebrate Button</p>
            <p>2. Confetti animation starts</p>
            <p>3. Confetti fills browser screen</p>
            <p>4. Animation stops after 5 seconds</p>
          </div>

        </div>

        {/* Important Props */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">

          <h2 className="font-bold text-lg text-blue-700 mb-3">
            Important Props
          </h2>

          <ul className="space-y-2 text-gray-700">

            <li>
              <span className="font-bold">
                width :
              </span>{" "}
              Browser width
            </li>

            <li>
              <span className="font-bold">
                height :
              </span>{" "}
              Browser height
            </li>

            <li>
              <span className="font-bold">
                numberOfPieces :
              </span>{" "}
              Number of confetti particles
            </li>

            <li>
              <span className="font-bold">
                gravity :
              </span>{" "}
              Falling speed
            </li>

          </ul>

        </div>

        {/* Button */}
        <button
          onClick={startConfetti}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-bold transition"
        >
          🎉 Celebrate
        </button>

      </div>

    </div>
  );
}