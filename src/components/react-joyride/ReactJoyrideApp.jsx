import { useState } from "react";
import {Joyride} from "react-joyride";

function ReactJoyrideApp() {
  const [runTour, setRunTour] = useState(false);

  const steps = [
    {
      target: ".profile-card",
      content: "This is your profile information.",
    },
    {
      target: ".course-section",
      content: "Here you can view your courses.",
    },
    {
      target: ".settings-btn",
      content: "Use settings to customize your account.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
      />

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Joyride Demo
        </h1>

        {/* What is React Joyride */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            What is react-joyride?
          </h2>

          <p>
            react-joyride helps create guided tours
            and onboarding experiences inside React
            applications.
          </p>

        </div>

        {/* Installation */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            Installation
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-joyride
          </div>

        </div>

        {/* Start Tour */}
        <div className="mb-8">

          <button
            onClick={() => setRunTour(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Start Application Tour
          </button>

        </div>

        {/* Profile Section */}
        <div className="profile-card bg-purple-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-2">
            User Profile
          </h2>

          <p>Name: Balakrishna</p>
          <p>Role: React Developer</p>

        </div>

        {/* Courses */}
        <div className="course-section bg-yellow-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-2">
            Courses
          </h2>

          <ul className="list-disc pl-6">
            <li>React JS</li>
            <li>Node JS</li>
            <li>Spring Boot</li>
          </ul>

        </div>

        {/* Settings */}
        <button className="settings-btn bg-green-600 text-white px-6 py-3 rounded-lg">
          Settings
        </button>

      </div>

    </div>
  );
}

export default ReactJoyrideApp;