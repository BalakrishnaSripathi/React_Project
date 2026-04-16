import React, { Suspense, lazy } from "react";

const Content = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./Content")), 2000);
  })
);

export default function Header() {
  return (
    <div>
      <h3>Header Loaded ✅</h3>

      <Suspense fallback={<p>Loading Content...</p>}>
        <Content />
      </Suspense>
    </div>
  );
}