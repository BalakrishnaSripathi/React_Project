// QuillEditor.jsx

import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function QuillEditor() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl">
        
        <h1 className="text-3xl font-bold mb-6">
          React Quill New Editor
        </h1>

        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Write here..."
        />

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Output
          </h2>

          <div
            className="border p-4 rounded-lg bg-gray-50"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      </div>
    </div>
  );
}