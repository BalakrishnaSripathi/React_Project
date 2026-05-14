import React, { useRef, useState } from "react";

/*
========================================================
INSTALLATION
========================================================

npm install react-webcam
npm install use-sound
npm install react-player
npm install lucide-react

========================================================
IMPORTS
========================================================
*/

import Webcam from "react-webcam";
import useSound from "use-sound";
import ReactPlayer from "react-player";

import {
  Camera,
  Play,
  Volume2,
  ImageIcon,
  Video,
  Music,
} from "lucide-react";

/*
========================================================
SOUND FILE
(Add your own mp3 inside src/assets folder)
========================================================

Example:
src/assets/click.mp3

========================================================
*/


export default function MediaHooksDemo() {
  
  /*
  ========================================================
  react-webcam
  ========================================================
  */

  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capturePhoto = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImage(screenshot);

    playSound();
  };

  /*
  ========================================================
  use-sound
  ========================================================
  */

  const [playSound] = useSound(
  "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
);

  /*
  ========================================================
  react-player
  ========================================================
  */

  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-950 text-white p-8">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-5">
          Media Hooks Demo
        </h1>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
          Single React JSX project demonstrating
          react-webcam, use-sound, and react-player
          with working examples, animations,
          installation steps, imports, and functionality.
        </p>
      </div>

      {/* Installation */}
      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">
          Installation
        </h2>

        <div className="bg-black rounded-2xl p-6 overflow-auto">
          <pre className="text-green-400 text-sm">{`
npm install react-webcam
npm install use-sound
npm install react-player
npm install lucide-react
          `}</pre>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* react-webcam */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-7 hover:border-cyan-400 transition-all duration-500">
          
          <div className="flex items-center gap-3 mb-5">
            <Camera
              className="text-cyan-400 animate-bounce"
              size={35}
            />

            <h2 className="text-2xl font-bold">
              react-webcam
            </h2>
          </div>

          {/* Import */}
          <div className="bg-black rounded-xl p-4 mb-5">
            <pre className="text-green-400 text-sm">{`
import Webcam from "react-webcam";
            `}</pre>
          </div>

          {/* Webcam */}
          <div className="overflow-hidden rounded-2xl mb-5">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full rounded-2xl"
            />
          </div>

          {/* Button */}
          <button
            onClick={capturePhoto}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"
          >
            <ImageIcon size={22} />
            Capture Photo
          </button>

          {/* Screenshot */}
          {image && (
            <div className="mt-6 animate-pulse">
              <img
                src={image}
                alt="Captured"
                className="rounded-2xl border border-cyan-400"
              />
            </div>
          )}

          {/* Features */}
          <div className="mt-6 text-slate-300 space-y-2">
            <p>✅ Camera Access</p>
            <p>✅ Capture Photos</p>
            <p>✅ Video Streaming</p>
            <p>✅ Face Detection Apps</p>
          </div>
        </div>

        {/* use-sound */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-7 hover:border-cyan-400 transition-all duration-500">
          
          <div className="flex items-center gap-3 mb-5">
            <Music
              className="text-cyan-400 animate-pulse"
              size={35}
            />

            <h2 className="text-2xl font-bold">
              use-sound
            </h2>
          </div>

          {/* Import */}
          <div className="bg-black rounded-xl p-4 mb-5">
            <pre className="text-green-400 text-sm">{`
import useSound from "use-sound";
            `}</pre>
          </div>

          {/* Hook Usage */}
          <div className="bg-black rounded-xl p-4 mb-6">
            <pre className="text-green-400 text-sm">{`
const [playSound] = useSound(
  clickSound
);
            `}</pre>
          </div>

          {/* Play Sound */}
          <button
            onClick={playSound}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 animate-pulse"
          >
            <Volume2 size={22} />
            Play Sound
          </button>

          {/* Animation */}
          <div className="mt-10 flex justify-center">
            <div className="flex gap-3 items-end h-28">
              <div className="w-4 bg-cyan-400 rounded-full animate-bounce h-10"></div>
              <div className="w-4 bg-cyan-400 rounded-full animate-bounce delay-100 h-20"></div>
              <div className="w-4 bg-cyan-400 rounded-full animate-bounce delay-200 h-14"></div>
              <div className="w-4 bg-cyan-400 rounded-full animate-bounce delay-300 h-24"></div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 text-slate-300 space-y-2">
            <p>✅ Play Audio</p>
            <p>✅ Notification Sounds</p>
            <p>✅ Button Click Effects</p>
            <p>✅ Gaming Sounds</p>
          </div>
        </div>

        {/* react-player */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-7 hover:border-cyan-400 transition-all duration-500">
          
          <div className="flex items-center gap-3 mb-5">
            <Video
              className="text-cyan-400 animate-pulse"
              size={35}
            />

            <h2 className="text-2xl font-bold">
              react-player
            </h2>
          </div>

          {/* Import */}
          <div className="bg-black rounded-xl p-4 mb-5">
            <pre className="text-green-400 text-sm">{`
import ReactPlayer
from "react-player";
            `}</pre>
          </div>

          {/* Player */}
          <div className="overflow-hidden rounded-2xl mb-6">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              width="100%"
              controls
              playing={playing}
            />
          </div>

          {/* Controls */}
          <button
            onClick={() => setPlaying(!playing)}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"
          >
            <Play size={22} />
            {playing ? "Pause Video" : "Play Video"}
          </button>

          {/* Features */}
          <div className="mt-8 text-slate-300 space-y-2">
            <p>✅ YouTube Support</p>
            <p>✅ MP4 Playback</p>
            <p>✅ Streaming Support</p>
            <p>✅ Media Controls</p>
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="mt-24">
        <h2 className="text-4xl font-bold text-center mb-14">
          How These Hooks Work Together
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          
          <div className="bg-slate-900 border border-cyan-500 px-8 py-5 rounded-2xl animate-bounce">
            Capture Photo
          </div>

          <div className="text-4xl text-cyan-400">
            →
          </div>

          <div className="bg-slate-900 border border-cyan-500 px-8 py-5 rounded-2xl animate-pulse">
            Play Sound
          </div>

          <div className="text-4xl text-cyan-400">
            →
          </div>

          <div className="bg-slate-900 border border-cyan-500 px-8 py-5 rounded-2xl animate-bounce">
            Play Video
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="inline-block bg-cyan-500/10 border border-cyan-500 rounded-3xl px-10 py-6">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            Real Project Usage
          </h3>

          <p className="text-slate-300 max-w-3xl">
            These packages are commonly used in AI Camera Apps,
            Video Platforms, LMS Applications, Interview Systems,
            Gaming Projects, Music Apps, and Interactive React UI Projects.
          </p>
        </div>
      </div>
    </div>
  );
}