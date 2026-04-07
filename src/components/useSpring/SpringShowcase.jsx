import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

// 1. THE SOFT ENTRY (Wrapper for Cards/Forms)
export const FadeInCard = ({ children, className = "" }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.gentle,
  });

  return (
    <animated.div style={props} className={className}>
      {children}
    </animated.div>
  );
};

// 2. THE MAGNETIC BUTTON (Tactile Interaction)
export const MagneticButton = ({ children, onClick, className = "" }) => {
  const [props, api] = useSpring(() => ({
    scale: 1,
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    config: config.stiff,
  }));

  return (
    <animated.button
      style={props}
      onClick={onClick}
      onMouseEnter={() => api.start({ scale: 1.05, boxShadow: "0px 10px 15px rgba(0,0,0,0.1)" })}
      onMouseLeave={() => api.start({ scale: 1, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" })}
      className={`bg-black text-white px-6 py-2 rounded-lg font-medium transition-colors ${className}`}
    >
      {children}
    </animated.button>
  );
};

// 3. THE ATTENTION SHAKE (Error Feedback)
// This uses a ref-like 'trigger' to run the animation
export const ShakeContainer = ({ trigger, children, className = "" }) => {
  const [props, api] = useSpring(() => ({ x: 0 }));

  // We use a React effect to listen for the trigger change
  React.useEffect(() => {
    if (trigger) {
      api.start({
        from: { x: 0 },
        to: async (next) => {
          await next({ x: -10 });
          await next({ x: 10 });
          await next({ x: -10 });
          await next({ x: 10 });
          await next({ x: 0 });
        },
        config: { mass: 1, tension: 500, friction: 12 },
      });
    }
  }, [trigger, api]);

  return (
    <animated.div style={props} className={className}>
      {children}
    </animated.div>
  );
};

// --- DEMO COMPONENT ---
export default function SpringShowcase() {
  const [errorTrigger, setErrorTrigger] = useState(0);

  const handleVerify = () => {
    // Incrementing the trigger to fire the useEffect in ShakeContainer
    setErrorTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 gap-12">
      
      {/* Example of Soft Entry Card */}
      <FadeInCard className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Your components now feel "alive."</p>

        {/* Example of Shake Container around an input */}
        <ShakeContainer trigger={errorTrigger} className="mb-6">
          <input 
            type="text" 
            placeholder="Enter OTP" 
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#00BBA7] outline-none transition-colors"
          />
        </ShakeContainer>

        {/* Example of Magnetic Button */}
        <MagneticButton onClick={handleVerify} className="w-full bg-[#00BBA7]">
          Trigger Shake Error
        </MagneticButton>
      </FadeInCard>

      <p className="text-sm text-gray-400 italic">
        The card floated up, the button is magnetic, and the input shakes on error.
      </p>
    </div>
  );
}