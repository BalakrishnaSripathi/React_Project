import React, { Suspense, lazy } from "react";

const Footer = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./Footer")), 2000);
  })
);

export default function Content() {
  return (
    <div>
      <h3>Content Loaded ✅</h3>

      <Suspense fallback={<p>Loading Footer...</p>}>
        <Footer />
      </Suspense>
    </div>
  );
}