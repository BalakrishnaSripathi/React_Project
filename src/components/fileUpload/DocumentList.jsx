import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const DocumentList = () => {
  const [documents, setDocuments] =
    useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8091/api/documents"
      );

      console.log(response.data);

      setDocuments(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Documents List</h2>

      {documents.map((doc) => (
        <div
          key={doc._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{doc.documentName}</h3>

          <p>{doc.fileName}</p>

          <p>{doc.fileType}</p>

          {/* Open File */}
          <a
            href={`http://localhost:8091/api/documents/${doc._id}`}
            target="_blank"
            rel="noreferrer"
          >
            View File
          </a>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;