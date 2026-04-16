import React, { Suspense, lazy } from "react";

const Header = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./Header")), 2000);
  })
);

export default function SuspenseComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white">
      
      {/* Welcome Section */}
      <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <h1 className="text-4xl font-bold">🎓 Welcome to LMS</h1>
        <p className="mt-2 text-lg">Learn. Build. Grow 🚀</p>

        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          className="mx-auto mt-6 rounded-xl w-80 shadow-lg"
        />
      </div>

      {/* Header */}
      <div className="mt-6">
        <Suspense fallback={<p className="text-center">Loading Header...</p>}>
          <Header />
        </Suspense>
      </div>
    </div>
  );
}