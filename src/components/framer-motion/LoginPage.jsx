import { motion } from "framer-motion";
import { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
      >
        <h2 className="text-white mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="text-white mb-3 p-2 w-64 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="text-white mb-3 p-2 w-64 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => onLogin(email, password)}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </motion.button>

        {/* Demo Credentials */}
        <p className="text-gray-300 text-xs mt-3">
          Demo: admin@gmail.com / 1234
        </p>
      </motion.div>
    </div>
  );
}