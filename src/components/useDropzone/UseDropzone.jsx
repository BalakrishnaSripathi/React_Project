import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function UseDropzone() {
  const [files, setFiles] = useState([]);

  // 1. The Core Logic
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map(file => 
      // Important: We attach a 'preview' property to the file object
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    ));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] }, // Only allow images
    multiple: true             // Allow multiple files
  });

  // 2. Memory Cleanup
  useEffect(() => {
    // This prevents memory leaks by "revoking" the data URIs when files change
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div style={containerStyle}>
      {/* 3. The Dropzone Area */}
      <div {...getRootProps()} style={{
        ...dropzoneStyle,
        borderColor: isDragActive ? '#2196f3' : '#eeeeee' // Change color on hover
      }}>
        <input {...getInputProps()} />
        {isDragActive ? 
          <p>Drop the files here...</p> : 
          <p>Drag 'n' drop images here, or click to select files</p>
        }
      </div>

      {/* 4. The Preview Grid */}
      <div style={thumbsContainer}>
        {files.map(file => (
          <div key={file.name} style={thumbStyle}>
            <img src={file.preview} style={imgStyle} alt="preview" />
            <p style={labelStyle}>{file.name} ({(file.size / 1024).toFixed(0)} KB)</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Basic Styles
const containerStyle = { padding: '20px', fontFamily: 'sans-serif' };
const dropzoneStyle = { border: '2px dashed #cccccc', padding: '40px', textAlign: 'center', cursor: 'pointer', transition: '0.3s' };
const thumbsContainer = { display: 'flex', flexWrap: 'wrap', marginTop: '20px' };
const thumbStyle = { margin: '10px', width: '120px', textAlign: 'center' };
const imgStyle = { width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' };
const labelStyle = { fontSize: '10px', marginTop: '5px', color: '#666' };