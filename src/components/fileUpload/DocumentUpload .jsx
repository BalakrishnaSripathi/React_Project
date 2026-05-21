import React, { useState } from "react";

import axios from "axios";

const DocumentUpload = () => {
  const [documentName, setDocumentName] =
    useState("");

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData
    const formData = new FormData();

    formData.append(
      "documentName",
      documentName
    );

    formData.append("file", file);

    // Print Payload
    console.log("------ PAYLOAD ------");

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post(
        "http://localhost:8091/api/documents/upload",

        formData,

        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      console.log(
        "UPLOAD RESPONSE:",
        response.data
      );
    } catch (error) {
      console.log(
        "UPLOAD ERROR:",
        error
      );
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
      }}
    >
      <h2>Upload Document</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Document Name"
            value={documentName}
            onChange={(e) =>
              setDocumentName(e.target.value)
            }
          />
        </div>

        <br />

        <div>
          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />
        </div>

        <br />

        <button type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default DocumentUpload;