import { useState } from "react";
import OtpInput from "react-otp-input";

export default function OTPApp() {
  const [otp, setOtp] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          OTP Verification
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter the 6-digit OTP sent to your mobile
        </p>

        <div className="flex justify-center mb-6">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="w-2"></span>}
            renderInput={(props) => (
              <input
                {...props}
                className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold focus:outline-none focus:border-blue-500 transition"
              />
            )}
          />
        </div>

        <button
          className={`w-full py-3 rounded-xl text-white font-semibold transition ${
            otp.length === 6
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={otp.length !== 6}
        >
          Verify OTP
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Current OTP:
            <span className="font-bold text-black ml-2">{otp}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
