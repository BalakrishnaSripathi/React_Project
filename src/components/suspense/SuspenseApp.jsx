import React, { Suspense, lazy } from "react";

const SuspenseComponent = lazy(() => import("./SuspenseComponent"));

export default function SuspenseApp() {
  return (
    <Suspense fallback={<p>Loading Main...</p>}>
      <SuspenseComponent />
    </Suspense>
  );
}