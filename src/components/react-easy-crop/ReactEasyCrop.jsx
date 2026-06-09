import { useState } from "react";
import Cropper from "react-easy-crop";

function ReactEasyCropApp() {
  const [image, setImage] = useState(null);

  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(1);

  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = (
    croppedArea,
    croppedAreaPixels
  ) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(
        URL.createObjectURL(e.target.files[0])
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Easy Crop Demo
        </h1>

        {/* What is react-easy-crop */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            What is react-easy-crop?
          </h2>

          <p>
            A React library for cropping images and videos
            with zoom and drag support.
          </p>

        </div>

        {/* Install */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-easy-crop
          </div>

        </div>

        {/* Upload */}
        <div className="mb-6">

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded-lg"
          />

        </div>

        {image && (
          <>
            {/* Crop Area */}
            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-6">

              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />

            </div>

            {/* Zoom */}
            <div className="mb-6">

              <label className="font-bold">
                Zoom: {zoom}
              </label>

              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) =>
                  setZoom(Number(e.target.value))
                }
                className="w-full"
              />

            </div>

            {/* Crop Result Info */}
            <div className="bg-yellow-50 p-4 rounded-lg">

              <h3 className="font-bold mb-2">
                Cropped Area Pixels
              </h3>

              <pre>
                {JSON.stringify(
                  croppedArea,
                  null,
                  2
                )}
              </pre>

            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default ReactEasyCropApp;