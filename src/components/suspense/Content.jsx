import React, { Suspense, lazy } from "react";

const Footer = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./Footer")), 2000);
  })
);

export default function Content() {
  return (
    <div className="bg-blue-100 rounded-2xl p-5 shadow-md mt-6">
      
      <h3 className="text-xl font-semibold">📚 Course Content</h3>
      <p className="text-gray-700 mt-2">
        React, Java, Full Stack Development
      </p>

      <Suspense fallback={<p className="mt-4">Loading Footer...</p>}>
        <Footer />
      </Suspense>
    </div>
  );
}