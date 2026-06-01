import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechApp() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <h1 className="text-center mt-10 text-red-500 text-2xl">
        Browser does not support Speech Recognition
      </h1>
    );
  }

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Speech Recognition Demo
        </h1>

        {/* What is react-speech-recognition */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            What is react-speech-recognition?
          </h2>

          <p>
            Converts voice into text using the browser's
            Speech Recognition API.
          </p>
        </div>

        {/* Install */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-speech-recognition
          </div>
        </div>

        {/* Where to Use */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Voice Search</li>
            <li>Chat Applications</li>
            <li>AI Assistants</li>
            <li>Accessibility Tools</li>
            <li>Voice Notes</li>
            <li>Meeting Transcription</li>
          </ul>
        </div>

        {/* Status */}
        <div className="bg-purple-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            Microphone Status
          </h2>

          <p className="text-xl">
            {listening
              ? "🎤 Listening..."
              : "🔴 Microphone Stopped"}
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">

          <button
            onClick={startListening}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Start Listening
          </button>

          <button
            onClick={stopListening}
            className="bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Stop Listening
          </button>

          <button
            onClick={resetTranscript}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Clear Text
          </button>

        </div>

        {/* Speech Output */}
        <div className="bg-gray-100 p-6 rounded-lg">

          <h2 className="text-2xl font-bold mb-4">
            Voice Output
          </h2>

          <p className="text-lg min-h-[120px]">
            {transcript || "Speak something..."}
          </p>

        </div>

      </div>

    </div>
  );
}

export default SpeechApp;