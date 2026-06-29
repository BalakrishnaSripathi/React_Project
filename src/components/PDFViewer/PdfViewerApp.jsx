import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

function PdfViewerApp() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/pdf") {
      setPdfFile(URL.createObjectURL(file));
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React PDF Viewer Demo
        </h1>

        {/* What is React PDF Viewer */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            What is @react-pdf-viewer/core?
          </h2>

          <p>
            It is a React library used to display PDF
            documents directly inside a React application.
          </p>

        </div>

        {/* Installation */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            Installation
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install @react-pdf-viewer/core
            <br />
            npm install pdfjs-dist
          </div>

        </div>

        {/* Upload PDF */}
        <div className="mb-6">

          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="border rounded-lg p-2"
          />

        </div>

        {/* PDF Viewer */}
        {pdfFile && (
          <div className="border rounded-lg overflow-hidden h-[700px]">

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfFile} />
            </Worker>

          </div>
        )}

      </div>

    </div>
  );
}

export default PdfViewerApp;