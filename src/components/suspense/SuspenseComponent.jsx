import React, { Suspense, lazy } from "react";

const Header = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./Header")), 2000);
  })
);

export default function SuspenseComponent() {
  return (
    <div>
      <h3>Main Loaded ✅</h3>

      <Suspense fallback={<p>Loading Header...</p>}>
        <Header />
      </Suspense>
    </div>
  );
}