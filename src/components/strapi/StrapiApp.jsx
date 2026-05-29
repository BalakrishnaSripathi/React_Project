import { useState } from "react";

export default function StrapiApp() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [singleFile, setSingleFile] = useState(null);

  // =========================
  // POST - Upload File
  // =========================
  const uploadFile = async () => {
    if (!file) {
      alert("Select File");
      return;
    }

    const formData = new FormData();

    // Strapi requires "files"
    formData.append("files", file);

    try {
      const response = await fetch(
        "http://localhost:1337/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log("Uploaded:", data);

      alert("File Uploaded Successfully");

      getAllFiles();
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // GET - All Files
  // =========================
  const getAllFiles = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/api/upload/files"
      );

      const data = await response.json();

      console.log("All Files:", data);

      setFiles(data);
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // GET - Single File
  // =========================
  const getSingleFile = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:1337/api/upload/files/${id}`
      );

      const data = await response.json();

      console.log("Single File:", data);

      setSingleFile(data);
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // PUT - Update File Info
  // =========================
  const updateFile = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:1337/api/upload/files/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: "Updated File Name",
            alternativeText: "Updated Alt Text",
            caption: "Updated Caption",
          }),
        }
      );

      const data = await response.json();

      console.log("Updated:", data);

      alert("File Updated");

      getAllFiles();
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // DELETE - Delete File
  // =========================
  const deleteFile = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:1337/api/upload/files/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      console.log("Deleted:", data);

      alert("File Deleted");

      getAllFiles();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>Strapi CRUD Operations</h1>

      {/* ========================= */}
      {/* Upload File */}
      {/* ========================= */}

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <br />
      <br />

      <button onClick={uploadFile}>
        Upload File
      </button>

      <button onClick={getAllFiles}>
        Get All Files
      </button>

      <br />
      <br />

      {/* ========================= */}
      {/* Show All Files */}
      {/* ========================= */}

      <h2>All Uploaded Files</h2>

      {files.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>ID:</strong> {item.id}
          </p>

          <p>
            <strong>Name:</strong> {item.name}
          </p>

          <p>
            <strong>URL:</strong>
          </p>

          <a
            href={`http://localhost:1337${item.url}`}
            target="_blank"
            rel="noreferrer"
          >
            Open File
          </a>

          <br />
          <br />

          {/* Image Preview */}
          {item.mime?.startsWith("image") && (
            <img
              src={`http://localhost:1337${item.url}`}
              alt={item.name}
              width="200"
            />
          )}

          <br />
          <br />

          <button
            onClick={() =>
              getSingleFile(item.id)
            }
          >
            Get Single
          </button>

          <button
            onClick={() =>
              updateFile(item.id)
            }
          >
            Update
          </button>

          <button
            onClick={() =>
              deleteFile(item.id)
            }
          >
            Delete
          </button>
        </div>
      ))}

      {/* ========================= */}
      {/* Single File */}
      {/* ========================= */}

      {singleFile && (
        <div
          style={{
            border: "2px solid green",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2>Single File Details</h2>

          <p>
            <strong>ID:</strong> {singleFile.id}
          </p>

          <p>
            <strong>Name:</strong> {singleFile.name}
          </p>

          <p>
            <strong>MIME:</strong> {singleFile.mime}
          </p>

          <a
            href={`http://localhost:1337${singleFile.url}`}
            target="_blank"
            rel="noreferrer"
          >
            Open Single File
          </a>
        </div>
      )}
    </div>
  );
}