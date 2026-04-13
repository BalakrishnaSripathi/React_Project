import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import LoginPage from "./LoginPage";

export default function FramerMotionApp() {
  const controls = useAnimation();
  const [status, setStatus] = useState(""); // success | error

  // 🔐 Demo credentials
  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "1234") {
      setStatus("success");

      // 🚗 Car GO animation
      controls.start({
        x: "120vw",
        transition: { duration: 3, ease: "easeInOut" },
      });
    } else {
      setStatus("error");

      // 🚗 STOP animation (shake)
      controls.start({
        x: 0,
        transition: { duration: 0.2 },
      });

      controls.start({
        x: [0, -20, 20, -10, 10, 0],
        transition: { duration: 0.6 },
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      
      {/* Login */}
      <LoginPage onLogin={handleLogin} />

      {/* 🚗 Car */}
      <motion.img
        src="https://static.vecteezy.com/system/resources/thumbnails/044/012/937/small/side-view-white-suv-car-png.png"
        className="h-28 absolute bottom-10 left-10"
        animate={controls}
        initial={{ x: 0 }}
      />

      {/* 🚦 Signal */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-32 left-20 flex flex-col items-center"
        >
          <div className="w-6 h-6 bg-red-500 rounded-full mb-2 animate-pulse"></div>
          <p className="text-white text-sm">STOP</p>
        </motion.div>
      )}

      {status === "success" && (
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 0}}
          className="absolute top-10 right-10 text-green-400"
        >
          Login Success ✅
        </motion.p>
      )}
    </div>
  );
}