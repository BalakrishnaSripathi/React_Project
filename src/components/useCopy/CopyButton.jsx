import React from 'react';
import { useCopyToClipboard } from './useCopyToClipboard';

const CopyButton = ({ textToCopy = "Hello World!" }) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col gap-4 items-center">
      <div className="p-3 bg-gray-100 rounded border border-gray-200 w-full text-sm font-mono text-gray-700">
        {textToCopy}
      </div>

      <button
        onClick={() => copy(textToCopy)}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
          copied 
            ? "bg-green-500 text-white" 
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {copied ? "✓ Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CopyButton;