import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function EmojiPickerApp() {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Emoji Picker Demo
        </h1>

        {/* What is emoji-picker-react */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            What is emoji-picker-react?
          </h2>

          <p>
            A React library that provides a ready-made
            emoji picker component for selecting emojis.
          </p>
        </div>

        {/* Install */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install emoji-picker-react
          </div>
        </div>

        {/* Where to Use */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Chat Applications</li>
            <li>Messaging Apps</li>
            <li>Comment Sections</li>
            <li>Social Media Platforms</li>
            <li>Community Forums</li>
          </ul>
        </div>

        {/* Chat Box */}
        <div className="bg-gray-50 p-6 rounded-lg">

          <h2 className="text-2xl font-bold mb-4">
            Chat Example
          </h2>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full border rounded-lg p-3 mb-4"
            rows={4}
          />

          <div className="flex gap-4 mb-4">

            <button
              onClick={() => setShowPicker(!showPicker)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              😀 Open Emoji Picker
            </button>

            <button
              onClick={() => setMessage("")}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Clear Message
            </button>

          </div>

          {showPicker && (
            <div className="mb-4">
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
              />
            </div>
          )}

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold mb-2">
              Message Preview
            </h3>

            <p>
              {message || "No message yet..."}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default EmojiPickerApp;