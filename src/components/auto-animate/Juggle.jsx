import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Juggle() {
  const [balls, setBalls] = useState(["red", "green", "blue"]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [parent, enable] = useAutoAnimate({ duration: 500 });

  // Tailwind safe color mapping
  const colorClasses = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  function toggle() {
    enable(!isEnabled);
    setIsEnabled(!isEnabled);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prev) => {
        const juggled = [...prev];
        juggled.push(juggled.shift());
        return juggled;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      
      {/* Balls */}
      <ul ref={parent} className="flex gap-4">
        {balls.map((color) => (
          <li
            key={color}
            className={`${colorClasses[color]} text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold`}
          >
            {color}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={toggle}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        {isEnabled ? "🚫 Disable Animations" : "✅ Enable Animations"}
      </button>
    </div>
  );
}

export default Juggle;