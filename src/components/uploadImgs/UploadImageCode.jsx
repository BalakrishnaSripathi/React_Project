export default function UploadImageCode() {
    const code = `

    import React, { useState } from "react";
    
    const ImageUpload = () => {
      const [file, setFile] = useState(null);
      const [preview, setPreview] = useState(null);
    
      const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    
        if (selectedFile) {
          setPreview(URL.createObjectURL(selectedFile));
        }
      };
    
      const handleUpload = async () => {
        const formData = new FormData();
        formData.append("profile_img", file);
        console.log(formData);
      };
      
      return (
        <div className="p-5">
          
          {/* Preview */}
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 object-cover rounded mb-3"
            />
          )}
    
          {/* File Input */}
          <input type="file" accept="image/*" onChange={handleChange} />
    
          {/* Upload Button */}
          <button
            onClick={handleUpload}
            className="block mt-3 px-4 py-2 bg-black text-white rounded"
          >
            Upload Image
          </button>
        </div>
      );
    };
    
    export default ImageUpload;


`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
