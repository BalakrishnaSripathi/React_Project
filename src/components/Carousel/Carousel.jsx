import { useState, useEffect } from "react";
import EmblaCarousel from "./EmblaCarousel";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const images = [
    "https://picsum.photos/id/1/1200/400",
    "https://picsum.photos/id/2/1200/400",
    "https://picsum.photos/id/4/1200/400",
    "https://picsum.photos/id/3/1200/400",
    "https://picsum.photos/id/5/1200/400",
    "https://picsum.photos/id/6/1200/400",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

 
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
    <div className="mt-3 relative w-full overflow-hidden rounded-2xl">
      
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full flex-shrink-0 h-[400px] object-cover"
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1"
      >
        →
      </button>
    
    </div>
        <EmblaCarousel/>
    </>
  );
}