import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

const AnimatedLoginCard = () => {
  const [error, setError] = useState(false);

  // 1. Define the Spring Logic
  const [styles, api] = useSpring(() => ({
    // Initial state (Mount animation)
    from: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
    to: { opacity: 1, transform: "scale(1) translateY(0px)" },
    config: config.gentle, // Using a built-in preset
  }));

  // 2. Interaction: Hover Effect
  const handleMouseEnter = () => {
    api.start({ transform: "scale(1.02)", config: config.stiff });
  };

  const handleMouseLeave = () => {
    api.start({ transform: "scale(1)", config: config.gentle });
  };

  // 3. Interaction: Shake on Error
  const triggerError = () => {
    setError(true);
    // Sequence animation: move left, then right, then back to center
    api.start({
      from: { x: 0 },
      to: async (next) => {
        await next({ x: -10 });
        await next({ x: 10 });
        await next({ x: -10 });
        await next({ x: 0 });
      },
      config: { duration: 50 }, // Quick snap for errors
    });
    setTimeout(() => setError(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* 4. Use the 'animated' tag and pass styles */}
      <animated.div
        style={styles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-80 p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 text-center"
      >
        <h2 className="text-xl font-bold mb-4">Verification</h2>
        <p className="text-gray-500 mb-6">Enter your 6-digit code</p>
        
        <div className={`h-12 w-full border-2 rounded-lg mb-6 transition-colors ${
          error ? "border-red-500" : "border-teal-500"
        }`} />

        <button
          onClick={triggerError}
          className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
        >
          Verify Code
        </button>
      </animated.div>
      
      {error && <p className="mt-4 text-red-500 font-medium">Invalid code. Try again!</p>}
    </div>
  );
};

export default AnimatedLoginCard;