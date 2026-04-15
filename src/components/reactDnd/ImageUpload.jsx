import { useState,useEffect } from "react";

export default function ImageUpload() {
  const [images, setImages] = useState([]);

  // 📥 Handle files
  const handleFiles = (files) => {
    const fileArray = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...fileArray]);
  };

  // 🖱️ Drop
  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  // 🖱️ Select
  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  // ❌ Remove
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
useEffect(() => {
  return () => {
    images.forEach((img) => URL.revokeObjectURL(img.preview));
  };
}, [images]);
  return (
    <div className="p-6">
      
      {/* Drop Area */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-400 rounded-lg p-10 text-center cursor-pointer hover:bg-gray-100"
      >
        <p className="text-gray-600">Drag & Drop Images Here</p>
        <p className="text-sm text-gray-400">or click to upload</p>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="hidden"
          id="fileInput"
        />

        <label htmlFor="fileInput" className="block mt-3 text-blue-500">
          Browse Files
        </label>
      </div>

      {/* Preview */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img.preview}
              className="w-full h-32 object-cover rounded-lg"
            />

            {/* Remove button */}
            <button
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 rounded"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

