import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LoginPage from "./LoginPage";

export default function FramerMotionApp() {
  const controls = useAnimation();

  const [status, setStatus] = useState("");
  const [position, setPosition] = useState({ x: 50, y: 0 });

  // 🔊 Sounds
  const engineSound = useRef(
    new Audio("https://www.soundjay.com/transportation/car-accelerate-1.mp3")
  );
  const policeSound = useRef(
    new Audio("https://www.soundjay.com/misc/police-siren-01.mp3")
  );

  // 🎮 Keyboard control
  useEffect(() => {
    const handleKey = (e) => {
      setPosition((prev) => {
        let x = prev.x;
        let y = prev.y;

        if (e.key === "ArrowRight") x += 40;
        if (e.key === "ArrowLeft") x -= 40;
        if (e.key === "ArrowUp") y -= 20;
        if (e.key === "ArrowDown") y += 20;

        return { x, y };
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // 🔐 Login logic
  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "1234") {
      setStatus("success");

      engineSound.current.currentTime = 0;
      engineSound.current.play();

      // 🚗 GO
      controls.start({
        x: "120vw",
        scale: 1.1,
        transition: { duration: 3, ease: "easeInOut" },
      });
    } else {
      setStatus("error");

      policeSound.current.currentTime = 0;
      policeSound.current.play();

      // 🚗 SHAKE
      controls.start({
        x: [0, -20, 20, -10, 10, 0],
        transition: { duration: 0.5 },
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-800">

      {/* 🌧️ Rain */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[20px] bg-white/30 animate-[rain_0.7s_infinite]"
            style={{ left: Math.random() * 100 + "%" }}
          />
        ))}
      </div>

      {/* 🛣️ Road */}
      <div className="absolute bottom-0 w-full h-32 bg-gray-700">
        <motion.div
          className="absolute top-1/2 w-full h-1 bg-white"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>

      {/* Login */}
      <LoginPage onLogin={handleLogin} />

      {/* 🚗 Car (IMPORTANT FIX HERE) */}
      <motion.img
        src="https://static.vecteezy.com/system/resources/thumbnails/044/012/937/small/side-view-white-suv-car-png.png"
        className="h-24 absolute bottom-20"
        animate={controls}   // ✅ FIXED
        initial={{ x: 50, y: 0 }}
        style={{
          x: position.x,
          y: position.y,
        }}
      />

      {/* Success */}
      {status === "success" && (
        <motion.h1
          className="absolute top-10 right-10 text-green-400 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          GO 🚗💨
        </motion.h1>
      )}

      {/* Error */}
      {status === "error" && (
        <motion.h1
          className="absolute top-10 right-10 text-red-400 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🚓 STOP!
        </motion.h1>
      )}
    </div>
  );
}