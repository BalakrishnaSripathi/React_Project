// PlayerApp.jsx

import React from "react";
import ReactPlayer from "react-player";

export default function PlayerApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        React Player Example
      </h1>

      {/* Video Player */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls={true}
          playing={false}
          width="100%"
          height="500px"
        />
      </div>

      {/* Features Section */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Why use react-player?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Play YouTube videos</li>
          <li>Play MP4 videos</li>
          <li>Supports Vimeo, Facebook, Twitch, SoundCloud</li>
          <li>Custom controls support</li>
          <li>Responsive video player</li>
          <li>Easy integration in React projects</li>
        </ul>
      </div>

      {/* Hook Explanation */}
      <div className="mt-6 bg-blue-100 p-5 rounded-2xl max-w-3xl">
        <h2 className="text-xl font-bold mb-2">Component Working</h2>

        <p className="text-gray-800">
          This component uses the <b>ReactPlayer</b> package to display and play
          online videos inside React applications.
        </p>

        <p className="mt-2 text-gray-800">
          Props used:
        </p>

        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li><b>url</b> → Video link</li>
          <li><b>controls</b> → Show player controls</li>
          <li><b>playing</b> → Auto play or not</li>
          <li><b>width / height</b> → Player size</li>
        </ul>
      </div>
    </div>
  );
}