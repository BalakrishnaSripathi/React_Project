import React, { Suspense, lazy } from "react";

const SuspenseComponent = lazy(() => import("./SuspenseComponent"));

export default function SuspenseApp() {
  return (
    <div className="flex justify-center">
    <Suspense fallback={<p className="text-red-600">Loading Main...</p>}>
      <SuspenseComponent />
    </Suspense>
    </div>
  );
}