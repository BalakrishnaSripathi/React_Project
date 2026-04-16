import React, { Suspense, lazy } from "react";

const Content = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./Content")), 2000);
  })
);

export default function Header() {
  return (
    <div className="bg-white text-black rounded-2xl p-5 shadow-md mt-6">
      
      <h2 className="text-2xl font-semibold mb-2">📌 Header Section</h2>
      <p className="text-gray-600">Navigation / User Info</p>

      <Suspense fallback={<p className="mt-4">Loading Content...</p>}>
        <Content />
      </Suspense>
    </div>
  );
}