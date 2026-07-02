import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useBlocker,
} from "react-router-dom";

function FormPage() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  const blocker = useBlocker(!saved && name !== "");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          useBlocker Demo
        </h1>

        {/* What is useBlocker */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-3">
            What is useBlocker?
          </h2>

          <p>
            useBlocker prevents users from accidentally leaving a page
            when they have unsaved changes.
          </p>
        </div>

        {/* Installation */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-3">
            Installation
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-router-dom
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-50 p-6 rounded-lg">

          <label className="block font-semibold mb-2">
            Student Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSaved(false);
            }}
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={() => setSaved(true)}
            className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Save
          </button>

        </div>

        <div className="mt-8">
          <Link
            to="/home"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Go To Home
          </Link>
        </div>

        {blocker.state === "blocked" && (
          <div className="mt-8 bg-red-100 border border-red-400 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-red-700">
              Unsaved Changes!
            </h2>

            <p className="mb-4">
              You have unsaved changes. Do you really want to leave?
            </p>

            <div className="flex gap-4">

              <button
                onClick={() => blocker.proceed()}
                className="bg-red-600 text-white px-5 py-2 rounded-lg"
              >
                Leave
              </button>

              <button
                onClick={() => blocker.reset()}
                className="bg-gray-600 text-white px-5 py-2 rounded-lg"
              >
                Stay
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-4xl font-bold">
      Home Page
    </div>
  );
}

export default function UseBlocker() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}