import React, { useState, useEffect } from 'react'

const UploadImage = () => {
  const [video, setVideo] = useState(null)
  const [image,setImage] =useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVideo(url)
    }
  }

  const handleChange1 =(e)=>{
    const file=e.target.files[0]
    if (file){
        const url=URL.createObjectURL(file)
        setImage(url)
    }
  }

  // cleanup (important)
  useEffect(() => {
    return () => {
      if (video) URL.revokeObjectURL(video)
    }
  }, [video])

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-xl">
        <input
          type="file"
          accept="video/mp4"
          onChange={handleChange}
          className="text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-lg file:border-0
                     file:bg-purple-50 file:text-purple-700
                     hover:file:bg-purple-100"
        />
        <p className="mt-2 text-xs text-gray-400">Upload your video</p>
      </div>
      <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-xl">
  <input
    type="file"
    onChange={handleChange1}
    className="text-sm text-gray-500
               file:mr-4 file:py-2 file:px-4
               file:rounded-lg file:border-0
               file:bg-purple-50 file:text-purple-700
               hover:file:bg-purple-100 rounded-xl"
  />
  <p className="mt-2 text-xs text-gray-400">Upload your image</p>
</div>
    <div className='flex'>
      {/* show only if video exists */}
      {video && (
        <video
          className="w-96 mt-4 rounded-xl shadow-lg"
          controls
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {image && <img src={image} alt=""  width={200}/>}
      </div>
    </>
  )
}

export default UploadImage